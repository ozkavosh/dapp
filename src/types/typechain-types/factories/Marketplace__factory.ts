/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "ProductBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "ProductConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "productPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "ProductListed",
    type: "event",
  },
  {
    inputs: [],
    name: "USDc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "$USDc",
        type: "uint256",
      },
    ],
    name: "buyProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
    ],
    name: "confirmDelivery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "productCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "confirmed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakingBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5073a0b86991c6218b36c1d19d4a2e9eb0ce3606eb486000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061198b806100746000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063afcc4ad51161005b578063afcc4ad51461012b578063e0f6ef8714610149578063f8a0dd5714610167578063fd84cb971461017157610088565b806345bc78ab1461008d57806353b62866146100bd5780637acc0b20146100d957806389a1b5231461010f575b600080fd5b6100a760048036038101906100a29190610d17565b61018d565b6040516100b49190610d5d565b60405180910390f35b6100d760048036038101906100d29190610da4565b6101a5565b005b6100f360048036038101906100ee9190610de4565b610460565b6040516101069796959493929190610ecb565b60405180910390f35b61012960048036038101906101249190611076565b610584565b005b6101336107a8565b6040516101409190611131565b60405180910390f35b6101516107cc565b60405161015e9190610d5d565b60405180910390f35b61016f6107d2565b005b61018b60048036038101906101869190610de4565b610940565b005b60026020528060005260406000206000915090505481565b600081116101e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90611198565b60405180910390fd5b60006003600084815260200190815260200160002090508060030160149054906101000a900460ff1615610251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024890611204565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330620f42408661029e9190611253565b6040518463ffffffff1660e01b81526004016102bc93929190611295565b6020604051808303816000875af11580156102db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ff91906112f8565b507f60751e87ab3312710ec7d4da85ea804d0813ca2cb843a75cc23c672e1bd3954a60015433604051610333929190611325565b60405180910390a160016003600085815260200190815260200160002060030160146101000a81548160ff021916908315150217905550336003600085815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620f4240826103ce9190611253565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610418919061134e565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b6003602052806000526040600020600091509050806000015490806001018054610489906113b1565b80601f01602080910402602001604051908101604052809291908181526020018280546104b5906113b1565b80156105025780601f106104d757610100808354040283529160200191610502565b820191906000526020600020905b8154815290600101906020018083116104e557829003601f168201915b5050505050908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905087565b600081116105c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105be9061142e565b60405180910390fd5b600160008154809291906105da9061144e565b91905055506040518060e001604052806001548152602001838152602001620f4240836106079190611253565b81526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152506003600060015481526020019081526020016000206000820151816000015560208201518160010190816106899190611638565b506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff02191690831515021790555060a08201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160040160146101000a81548160ff0219169083151502179055509050507f12f74df6387ef2d51265f7b8c12c28c83ba3a6a78ad217f3846ec9c2b1fad92f60015483833360405161079c949392919061170a565b60405180910390a15050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008111610859576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610850906117a2565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016108b49291906117c2565b6020604051808303816000875af11580156108d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f791906112f8565b506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60006003600083815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146109e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e09061185d565b60405180910390fd5b8060030160149054906101000a900460ff16610a3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a31906118c9565b60405180910390fd5b8060040160149054906101000a900460ff1615610a8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8390611935565b60405180910390fd5b60018160040160146101000a81548160ff02191690831515021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd308360030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16620f42408560020154610b1e9190611253565b6040518463ffffffff1660e01b8152600401610b3c93929190611295565b6020604051808303816000875af1158015610b5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7f91906112f8565b50620f42408160020154610b939190611253565b600260008360040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610c01919061134e565b600260008360040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507ffae5642cdcdf1c5dbc67578b37e1e4d12db3301dbafbbde21d6eb479b082d4148233604051610c99929190611325565b60405180910390a15050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ce482610cb9565b9050919050565b610cf481610cd9565b8114610cff57600080fd5b50565b600081359050610d1181610ceb565b92915050565b600060208284031215610d2d57610d2c610caf565b5b6000610d3b84828501610d02565b91505092915050565b6000819050919050565b610d5781610d44565b82525050565b6000602082019050610d726000830184610d4e565b92915050565b610d8181610d44565b8114610d8c57600080fd5b50565b600081359050610d9e81610d78565b92915050565b60008060408385031215610dbb57610dba610caf565b5b6000610dc985828601610d8f565b9250506020610dda85828601610d8f565b9150509250929050565b600060208284031215610dfa57610df9610caf565b5b6000610e0884828501610d8f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e4b578082015181840152602081019050610e30565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e7382610e11565b610e7d8185610e1c565b9350610e8d818560208601610e2d565b610e9681610e57565b840191505092915050565b610eaa81610cd9565b82525050565b60008115159050919050565b610ec581610eb0565b82525050565b600060e082019050610ee0600083018a610d4e565b8181036020830152610ef28189610e68565b9050610f016040830188610d4e565b610f0e6060830187610ea1565b610f1b6080830186610ebc565b610f2860a0830185610ea1565b610f3560c0830184610ebc565b98975050505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f8382610e57565b810181811067ffffffffffffffff82111715610fa257610fa1610f4b565b5b80604052505050565b6000610fb5610ca5565b9050610fc18282610f7a565b919050565b600067ffffffffffffffff821115610fe157610fe0610f4b565b5b610fea82610e57565b9050602081019050919050565b82818337600083830152505050565b600061101961101484610fc6565b610fab565b90508281526020810184848401111561103557611034610f46565b5b611040848285610ff7565b509392505050565b600082601f83011261105d5761105c610f41565b5b813561106d848260208601611006565b91505092915050565b6000806040838503121561108d5761108c610caf565b5b600083013567ffffffffffffffff8111156110ab576110aa610cb4565b5b6110b785828601611048565b92505060206110c885828601610d8f565b9150509250929050565b6000819050919050565b60006110f76110f26110ed84610cb9565b6110d2565b610cb9565b9050919050565b6000611109826110dc565b9050919050565b600061111b826110fe565b9050919050565b61112b81611110565b82525050565b60006020820190506111466000830184611122565b92915050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f600082015250565b6000611182602083610e1c565b915061118d8261114c565b602082019050919050565b600060208201905081810360008301526111b181611175565b9050919050565b7f50726f6475637420616c726561647920736f6c64000000000000000000000000600082015250565b60006111ee601483610e1c565b91506111f9826111b8565b602082019050919050565b6000602082019050818103600083015261121d816111e1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061125e82610d44565b915061126983610d44565b925082820261127781610d44565b9150828204841483151761128e5761128d611224565b5b5092915050565b60006060820190506112aa6000830186610ea1565b6112b76020830185610ea1565b6112c46040830184610d4e565b949350505050565b6112d581610eb0565b81146112e057600080fd5b50565b6000815190506112f2816112cc565b92915050565b60006020828403121561130e5761130d610caf565b5b600061131c848285016112e3565b91505092915050565b600060408201905061133a6000830185610d4e565b6113476020830184610ea1565b9392505050565b600061135982610d44565b915061136483610d44565b925082820190508082111561137c5761137b611224565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113c957607f821691505b6020821081036113dc576113db611382565b5b50919050565b7f5072696365206d7573742062652067726561746572207468616e207a65726f00600082015250565b6000611418601f83610e1c565b9150611423826113e2565b602082019050919050565b600060208201905081810360008301526114478161140b565b9050919050565b600061145982610d44565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361148b5761148a611224565b5b600182019050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026114f87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826114bb565b61150286836114bb565b95508019841693508086168417925050509392505050565b600061153561153061152b84610d44565b6110d2565b610d44565b9050919050565b6000819050919050565b61154f8361151a565b61156361155b8261153c565b8484546114c8565b825550505050565b600090565b61157861156b565b611583818484611546565b505050565b5b818110156115a75761159c600082611570565b600181019050611589565b5050565b601f8211156115ec576115bd81611496565b6115c6846114ab565b810160208510156115d5578190505b6115e96115e1856114ab565b830182611588565b50505b505050565b600082821c905092915050565b600061160f600019846008026115f1565b1980831691505092915050565b600061162883836115fe565b9150826002028217905092915050565b61164182610e11565b67ffffffffffffffff81111561165a57611659610f4b565b5b61166482546113b1565b61166f8282856115ab565b600060209050601f8311600181146116a25760008415611690578287015190505b61169a858261161c565b865550611702565b601f1984166116b086611496565b60005b828110156116d8578489015182556001820191506020850194506020810190506116b3565b868310156116f557848901516116f1601f8916826115fe565b8355505b6001600288020188555050505b505050505050565b600060808201905061171f6000830187610d4e565b81810360208301526117318186610e68565b90506117406040830185610d4e565b61174d6060830184610ea1565b95945050505050565b7f7374616b696e672062616c616e63652063616e6e6f7420626520300000000000600082015250565b600061178c601b83610e1c565b915061179782611756565b602082019050919050565b600060208201905081810360008301526117bb8161177f565b9050919050565b60006040820190506117d76000830185610ea1565b6117e46020830184610d4e565b9392505050565b7f4f6e6c79207468652062757965722063616e20636f6e6669726d2064656c697660008201527f6572790000000000000000000000000000000000000000000000000000000000602082015250565b6000611847602383610e1c565b9150611852826117eb565b604082019050919050565b600060208201905081810360008301526118768161183a565b9050919050565b7f50726f64756374206e6f7420736f6c6400000000000000000000000000000000600082015250565b60006118b3601083610e1c565b91506118be8261187d565b602082019050919050565b600060208201905081810360008301526118e2816118a6565b9050919050565b7f44656c697665727920616c726561647920636f6e6669726d6564000000000000600082015250565b600061191f601a83610e1c565b915061192a826118e9565b602082019050919050565b6000602082019050818103600083015261194e81611912565b905091905056fea26469706673582212200da316c470e735471c32fddfdb749d5d2ad13aad417b9d4a7df3c76a87ef473264736f6c63430008180033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Marketplace & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Marketplace__factory {
    return super.connect(runner) as Marketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new Interface(_abi) as MarketplaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Marketplace {
    return new Contract(address, _abi, runner) as unknown as Marketplace;
  }
}
