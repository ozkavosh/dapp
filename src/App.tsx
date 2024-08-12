import { ethers, Network, BrowserProvider } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { Marketplace } from "./types/typechain-types/Marketplace";
import { IERC20, Marketplace__factory } from "./types/typechain-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "./components/ui/button";
import { IProduct } from "./models/Product";
import { AddressLike } from "ethers";
import { IERC20__factory } from "./types/typechain-types/factories";

interface IProductForm {
  name: string;
  price: number;
}

const initialValues: IProductForm = {
  name: "",
  price: 0,
};

const App = () => {
  const [provider, setProvider] = useState<BrowserProvider>();
  const [network, setNetwork] = useState<Network>();
  const [contract, setContract] = useState<Marketplace>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [USDC, setUSDC] = useState<IERC20>();
  const [balance, setBalance] = useState<bigint>();
  const [signerAddress, setSignerAddress] = useState<AddressLike>();

  const getProducts = useCallback(async () => {
    if (contract) {
      const products: IProduct[] = [];

      for (let i = 1; i <= (await contract.productCount()); i++) {
        const { name, price, seller, sold, buyer, confirmed } =
          await contract.products(i);
        products.push({ id: i, name, price, seller, sold, buyer, confirmed });
      }
      setProducts(products);
    }
  }, [contract]);

  const onProductSubmit = async (values: IProductForm) => {
    if (contract) {
      const tx = await contract.listProduct(values.name, values.price);
      await tx.wait();
      getProducts();
    }
  };

  const handleBuyProduct = async (productId: number, productPrice: bigint) => {
    if (contract && USDC) {
      await USDC.approve(contract.getAddress(), Number(productPrice) * 10 ** 6);
      const tx = await contract.buyProduct(
        productId,
        Number(productPrice) / 10 ** 6
      );
      await tx.wait();
      getProducts();
    }
  };

  const handleConfirmProductDelivery = async (productId: number) => {
    if (contract) {
      const tx = await contract.confirmDelivery(productId);
      await tx.wait();
      getProducts();
    }
  };

  const getBalance = useCallback(async () => {
    if (USDC && signerAddress) {
      const balance = await USDC.balanceOf(signerAddress);
      setBalance(balance);
    }
  }, [USDC, signerAddress]);

  useEffect(() => {
    const getUSDC = async () => {
      if (provider) {
        const signer = await provider.getSigner();
        const usdc = IERC20__factory.connect(
          "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          signer
        );
        setUSDC(usdc);
        getBalance();
      }
    };

    getUSDC();
  }, [provider, getBalance]);

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
      }
    };

    initializeProvider();
  }, []);

  useEffect(() => {
    const getNetwork = async () => {
      if (provider) {
        const network = await provider.getNetwork();
        setNetwork(network);
      }
    };

    getNetwork();
  }, [provider]);

  useEffect(() => {
    const getContract = async () => {
      if (provider && network) {
        const signer = await provider.getSigner();
        const contract = Marketplace__factory.connect(
          import.meta.env.VITE_MARKETPLACE_CONTRACT,
          signer
        );
        setContract(contract);

        setSignerAddress(await signer.getAddress());
      }
    };

    getContract();
  }, [provider, network]);

  useEffect(() => {
    getProducts();
  }, [contract, getProducts]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen px-4 py-2 bg-slate-800">
      <h1 className="text-4xl text-white">Ethereum Marketplace</h1>
      {USDC && signerAddress && (
        <div className="flex flex-col text-white">
          <h2 className="text-2xl">
            Connected with: {signerAddress.toString()}
          </h2>
          <p>Balance: {Number(balance) / 10 ** 6} USDC</p>
        </div>
      )}
      <Formik initialValues={initialValues} onSubmit={onProductSubmit}>
        {() => (
          <Form className="flex flex-col w-[42rem] gap-5 my-5 border border-primary-foreground p-5 rounded-sm">
            <h2 className="text-2xl text-white">List Product</h2>

            <div className="flex flex-col">
              <Field
                name="name"
                type="text"
                placeholder="Product name"
                className="text-secondary bg-transparent border border-primary-foreground p-2 rounded-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex flex-col">
              <Field
                name="price"
                type="number"
                placeholder="Product price"
                className="text-secondary bg-transparent border border-primary-foreground p-2 rounded-sm"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500"
              />
            </div>

            <Button type="submit" variant="secondary">
              List Product
            </Button>
          </Form>
        )}
      </Formik>

      <div className="flex flex-col w-full gap-5 my-5 border border-primary-foreground p-5 rounded-sm">
        <h2 className="text-2xl text-white">Listed Products</h2>
        <div className="flex flex-wrap gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[calc(33.3%-0.5rem)] p-2 border border-primary-foreground rounded-sm"
            >
              <p className="text-white">Name: {product.name}</p>
              <p className="text-white">Price: ${Number(product.price) / 10 ** 6}</p>
              <p className="text-white">Seller: {product.seller.toString()}</p>
              {product.sold && (
                <p className="text-white">Buyer: {product.buyer.toString()}</p>
              )}
              {product.sold &&
                (product.confirmed ? (
                  <p className="text-white">Received ❤️</p>
                ) : (
                  <p className="text-white">
                    Waiting for delivery confirmation
                  </p>
                ))}
              {signerAddress !== product.seller ? (
                <Button
                  variant="secondary"
                  disabled={product.sold}
                  onClick={() => handleBuyProduct(product.id, product.price)}
                >
                  Buy
                </Button>
              ) : (
                <p className="text-white mt-auto font-bold">
                  This is one of your products
                </p>
              )}
              {signerAddress === product.buyer && product.sold && (
                <Button
                  variant="secondary"
                  disabled={product.confirmed}
                  onClick={() => handleConfirmProductDelivery(product.id)}
                >
                  Confirm Delivery
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
