/* eslint-disable */
import {
  ABIGetter,
  ABIReceiver,
  ABIType,
  Address,
  Builder,
  Cell,
  Contract,
  ContractABI,
  ContractProvider,
  Dictionary,
  DictionaryValue,
  Sender,
  Slice,
  TupleBuilder,
  TupleReader,
  beginCell,
  contractAddress,
} from "@ton/core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type SetItem = {
  $$type: "SetItem";
  address: Address;
  name: string;
  max: bigint;
  total: bigint;
};

export function storeSetItem(src: SetItem) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(153180164, 32);
    b_0.storeAddress(src.address);
    b_0.storeStringRefTail(src.name);
    b_0.storeUint(src.max, 32);
    b_0.storeUint(src.total, 32);
  };
}

export function loadSetItem(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 153180164) {
    throw Error("Invalid prefix");
  }
  let _address = sc_0.loadAddress();
  let _name = sc_0.loadStringRefTail();
  let _max = sc_0.loadUintBig(32);
  let _total = sc_0.loadUintBig(32);
  return {
    $$type: "SetItem" as const,
    address: _address,
    name: _name,
    max: _max,
    total: _total,
  };
}

function loadTupleSetItem(source: TupleReader) {
  let _address = source.readAddress();
  let _name = source.readString();
  let _max = source.readBigNumber();
  let _total = source.readBigNumber();
  return {
    $$type: "SetItem" as const,
    address: _address,
    name: _name,
    max: _max,
    total: _total,
  };
}

function storeTupleSetItem(source: SetItem) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeString(source.name);
  builder.writeNumber(source.max);
  builder.writeNumber(source.total);
  return builder.build();
}

function dictValueParserSetItem(): DictionaryValue<SetItem> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetItem(src)).endCell());
    },
    parse: (src) => {
      return loadSetItem(src.loadRef().beginParse());
    },
  };
}

export type AddBottle = {
  $$type: "AddBottle";
  address: Address;
  amount: bigint;
};

export function storeAddBottle(src: AddBottle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(283242353, 32);
    b_0.storeAddress(src.address);
    b_0.storeUint(src.amount, 32);
  };
}

export function loadAddBottle(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 283242353) {
    throw Error("Invalid prefix");
  }
  let _address = sc_0.loadAddress();
  let _amount = sc_0.loadUintBig(32);
  return { $$type: "AddBottle" as const, address: _address, amount: _amount };
}

function loadTupleAddBottle(source: TupleReader) {
  let _address = source.readAddress();
  let _amount = source.readBigNumber();
  return { $$type: "AddBottle" as const, address: _address, amount: _amount };
}

function storeTupleAddBottle(source: AddBottle) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserAddBottle(): DictionaryValue<AddBottle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeAddBottle(src)).endCell());
    },
    parse: (src) => {
      return loadAddBottle(src.loadRef().beginParse());
    },
  };
}

export type SendBottle = {
  $$type: "SendBottle";
  masterAddress: Address;
  name: string;
  senderAddress: Address;
  total: bigint;
};

export function storeSendBottle(src: SendBottle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.masterAddress);
    b_0.storeStringRefTail(src.name);
    b_0.storeAddress(src.senderAddress);
    b_0.storeUint(src.total, 32);
  };
}

export function loadSendBottle(slice: Slice) {
  let sc_0 = slice;
  let _masterAddress = sc_0.loadAddress();
  let _name = sc_0.loadStringRefTail();
  let _senderAddress = sc_0.loadAddress();
  let _total = sc_0.loadUintBig(32);
  return {
    $$type: "SendBottle" as const,
    masterAddress: _masterAddress,
    name: _name,
    senderAddress: _senderAddress,
    total: _total,
  };
}

function loadTupleSendBottle(source: TupleReader) {
  let _masterAddress = source.readAddress();
  let _name = source.readString();
  let _senderAddress = source.readAddress();
  let _total = source.readBigNumber();
  return {
    $$type: "SendBottle" as const,
    masterAddress: _masterAddress,
    name: _name,
    senderAddress: _senderAddress,
    total: _total,
  };
}

function storeTupleSendBottle(source: SendBottle) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.masterAddress);
  builder.writeString(source.name);
  builder.writeAddress(source.senderAddress);
  builder.writeNumber(source.total);
  return builder.build();
}

function dictValueParserSendBottle(): DictionaryValue<SendBottle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendBottle(src)).endCell());
    },
    parse: (src) => {
      return loadSendBottle(src.loadRef().beginParse());
    },
  };
}

export type ArgSendBottle = {
  $$type: "ArgSendBottle";
  masterAddress: Address;
  senderAddress: Address;
  name: string;
  total: bigint;
};

export function storeArgSendBottle(src: ArgSendBottle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3370528856, 32);
    b_0.storeAddress(src.masterAddress);
    b_0.storeAddress(src.senderAddress);
    b_0.storeStringRefTail(src.name);
    b_0.storeUint(src.total, 32);
  };
}

export function loadArgSendBottle(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3370528856) {
    throw Error("Invalid prefix");
  }
  let _masterAddress = sc_0.loadAddress();
  let _senderAddress = sc_0.loadAddress();
  let _name = sc_0.loadStringRefTail();
  let _total = sc_0.loadUintBig(32);
  return {
    $$type: "ArgSendBottle" as const,
    masterAddress: _masterAddress,
    senderAddress: _senderAddress,
    name: _name,
    total: _total,
  };
}

function loadTupleArgSendBottle(source: TupleReader) {
  let _masterAddress = source.readAddress();
  let _senderAddress = source.readAddress();
  let _name = source.readString();
  let _total = source.readBigNumber();
  return {
    $$type: "ArgSendBottle" as const,
    masterAddress: _masterAddress,
    senderAddress: _senderAddress,
    name: _name,
    total: _total,
  };
}

function storeTupleArgSendBottle(source: ArgSendBottle) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.masterAddress);
  builder.writeAddress(source.senderAddress);
  builder.writeString(source.name);
  builder.writeNumber(source.total);
  return builder.build();
}

function dictValueParserArgSendBottle(): DictionaryValue<ArgSendBottle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgSendBottle(src)).endCell());
    },
    parse: (src) => {
      return loadArgSendBottle(src.loadRef().beginParse());
    },
  };
}

export type ArgVerifyBottle = {
  $$type: "ArgVerifyBottle";
  address: Address;
  masterAddress: Address;
  amount: bigint;
};

export function storeArgVerifyBottle(src: ArgVerifyBottle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2964497605, 32);
    b_0.storeAddress(src.address);
    b_0.storeAddress(src.masterAddress);
    b_0.storeInt(src.amount, 257);
  };
}

export function loadArgVerifyBottle(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2964497605) {
    throw Error("Invalid prefix");
  }
  let _address = sc_0.loadAddress();
  let _masterAddress = sc_0.loadAddress();
  let _amount = sc_0.loadIntBig(257);
  return {
    $$type: "ArgVerifyBottle" as const,
    address: _address,
    masterAddress: _masterAddress,
    amount: _amount,
  };
}

function loadTupleArgVerifyBottle(source: TupleReader) {
  let _address = source.readAddress();
  let _masterAddress = source.readAddress();
  let _amount = source.readBigNumber();
  return {
    $$type: "ArgVerifyBottle" as const,
    address: _address,
    masterAddress: _masterAddress,
    amount: _amount,
  };
}

function storeTupleArgVerifyBottle(source: ArgVerifyBottle) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeAddress(source.masterAddress);
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserArgVerifyBottle(): DictionaryValue<ArgVerifyBottle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgVerifyBottle(src)).endCell());
    },
    parse: (src) => {
      return loadArgVerifyBottle(src.loadRef().beginParse());
    },
  };
}

export type BagItem = {
  $$type: "BagItem";
  id: bigint;
  level: bigint;
  name: string;
  image_url: string;
  max: bigint;
  price: bigint;
};

export function storeBagItem(src: BagItem) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.id, 256);
    b_0.storeUint(src.level, 256);
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.image_url);
    b_0.storeUint(src.max, 256);
    let b_1 = new Builder();
    b_1.storeUint(src.price, 256);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadBagItem(slice: Slice) {
  let sc_0 = slice;
  let _id = sc_0.loadUintBig(256);
  let _level = sc_0.loadUintBig(256);
  let _name = sc_0.loadStringRefTail();
  let _image_url = sc_0.loadStringRefTail();
  let _max = sc_0.loadUintBig(256);
  let sc_1 = sc_0.loadRef().beginParse();
  let _price = sc_1.loadUintBig(256);
  return {
    $$type: "BagItem" as const,
    id: _id,
    level: _level,
    name: _name,
    image_url: _image_url,
    max: _max,
    price: _price,
  };
}

function loadTupleBagItem(source: TupleReader) {
  let _id = source.readBigNumber();
  let _level = source.readBigNumber();
  let _name = source.readString();
  let _image_url = source.readString();
  let _max = source.readBigNumber();
  let _price = source.readBigNumber();
  return {
    $$type: "BagItem" as const,
    id: _id,
    level: _level,
    name: _name,
    image_url: _image_url,
    max: _max,
    price: _price,
  };
}

function storeTupleBagItem(source: BagItem) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.id);
  builder.writeNumber(source.level);
  builder.writeString(source.name);
  builder.writeString(source.image_url);
  builder.writeNumber(source.max);
  builder.writeNumber(source.price);
  return builder.build();
}

function dictValueParserBagItem(): DictionaryValue<BagItem> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeBagItem(src)).endCell());
    },
    parse: (src) => {
      return loadBagItem(src.loadRef().beginParse());
    },
  };
}

export type ArgBagItem = {
  $$type: "ArgBagItem";
  id: bigint;
  level: bigint;
  name: string;
  image_url: string;
  max: bigint;
  price: bigint;
};

export function storeArgBagItem(src: ArgBagItem) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1606671232, 32);
    b_0.storeUint(src.id, 256);
    b_0.storeUint(src.level, 256);
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.image_url);
    b_0.storeUint(src.max, 256);
    let b_1 = new Builder();
    b_1.storeUint(src.price, 256);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadArgBagItem(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1606671232) {
    throw Error("Invalid prefix");
  }
  let _id = sc_0.loadUintBig(256);
  let _level = sc_0.loadUintBig(256);
  let _name = sc_0.loadStringRefTail();
  let _image_url = sc_0.loadStringRefTail();
  let _max = sc_0.loadUintBig(256);
  let sc_1 = sc_0.loadRef().beginParse();
  let _price = sc_1.loadUintBig(256);
  return {
    $$type: "ArgBagItem" as const,
    id: _id,
    level: _level,
    name: _name,
    image_url: _image_url,
    max: _max,
    price: _price,
  };
}

function loadTupleArgBagItem(source: TupleReader) {
  let _id = source.readBigNumber();
  let _level = source.readBigNumber();
  let _name = source.readString();
  let _image_url = source.readString();
  let _max = source.readBigNumber();
  let _price = source.readBigNumber();
  return {
    $$type: "ArgBagItem" as const,
    id: _id,
    level: _level,
    name: _name,
    image_url: _image_url,
    max: _max,
    price: _price,
  };
}

function storeTupleArgBagItem(source: ArgBagItem) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.id);
  builder.writeNumber(source.level);
  builder.writeString(source.name);
  builder.writeString(source.image_url);
  builder.writeNumber(source.max);
  builder.writeNumber(source.price);
  return builder.build();
}

function dictValueParserArgBagItem(): DictionaryValue<ArgBagItem> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgBagItem(src)).endCell());
    },
    parse: (src) => {
      return loadArgBagItem(src.loadRef().beginParse());
    },
  };
}

export type Master = {
  $$type: "Master";
  name: string;
  camp: string;
  phone: bigint;
  status: boolean;
};

export function storeMaster(src: Master) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.camp);
    b_0.storeUint(src.phone, 256);
    b_0.storeBit(src.status);
  };
}

export function loadMaster(slice: Slice) {
  let sc_0 = slice;
  let _name = sc_0.loadStringRefTail();
  let _camp = sc_0.loadStringRefTail();
  let _phone = sc_0.loadUintBig(256);
  let _status = sc_0.loadBit();
  return {
    $$type: "Master" as const,
    name: _name,
    camp: _camp,
    phone: _phone,
    status: _status,
  };
}

function loadTupleMaster(source: TupleReader) {
  let _name = source.readString();
  let _camp = source.readString();
  let _phone = source.readBigNumber();
  let _status = source.readBoolean();
  return {
    $$type: "Master" as const,
    name: _name,
    camp: _camp,
    phone: _phone,
    status: _status,
  };
}

function storeTupleMaster(source: Master) {
  let builder = new TupleBuilder();
  builder.writeString(source.name);
  builder.writeString(source.camp);
  builder.writeNumber(source.phone);
  builder.writeBoolean(source.status);
  return builder.build();
}

function dictValueParserMaster(): DictionaryValue<Master> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeMaster(src)).endCell());
    },
    parse: (src) => {
      return loadMaster(src.loadRef().beginParse());
    },
  };
}

export type ArgAddMaster = {
  $$type: "ArgAddMaster";
  master: Address;
  name: string;
  camp: string;
  phone: bigint;
  status: boolean;
};

export function storeArgAddMaster(src: ArgAddMaster) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(7850487, 32);
    b_0.storeAddress(src.master);
    b_0.storeStringRefTail(src.name);
    b_0.storeStringRefTail(src.camp);
    b_0.storeUint(src.phone, 256);
    b_0.storeBit(src.status);
  };
}

export function loadArgAddMaster(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 7850487) {
    throw Error("Invalid prefix");
  }
  let _master = sc_0.loadAddress();
  let _name = sc_0.loadStringRefTail();
  let _camp = sc_0.loadStringRefTail();
  let _phone = sc_0.loadUintBig(256);
  let _status = sc_0.loadBit();
  return {
    $$type: "ArgAddMaster" as const,
    master: _master,
    name: _name,
    camp: _camp,
    phone: _phone,
    status: _status,
  };
}

function loadTupleArgAddMaster(source: TupleReader) {
  let _master = source.readAddress();
  let _name = source.readString();
  let _camp = source.readString();
  let _phone = source.readBigNumber();
  let _status = source.readBoolean();
  return {
    $$type: "ArgAddMaster" as const,
    master: _master,
    name: _name,
    camp: _camp,
    phone: _phone,
    status: _status,
  };
}

function storeTupleArgAddMaster(source: ArgAddMaster) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.master);
  builder.writeString(source.name);
  builder.writeString(source.camp);
  builder.writeNumber(source.phone);
  builder.writeBoolean(source.status);
  return builder.build();
}

function dictValueParserArgAddMaster(): DictionaryValue<ArgAddMaster> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgAddMaster(src)).endCell());
    },
    parse: (src) => {
      return loadArgAddMaster(src.loadRef().beginParse());
    },
  };
}

export type Bags = {
  $$type: "Bags";
  bags: string;
};

export function storeBags(src: Bags) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.bags);
  };
}

export function loadBags(slice: Slice) {
  let sc_0 = slice;
  let _bags = sc_0.loadStringRefTail();
  return { $$type: "Bags" as const, bags: _bags };
}

function loadTupleBags(source: TupleReader) {
  let _bags = source.readString();
  return { $$type: "Bags" as const, bags: _bags };
}

function storeTupleBags(source: Bags) {
  let builder = new TupleBuilder();
  builder.writeString(source.bags);
  return builder.build();
}

function dictValueParserBags(): DictionaryValue<Bags> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeBags(src)).endCell());
    },
    parse: (src) => {
      return loadBags(src.loadRef().beginParse());
    },
  };
}

export type ArgWaitMaster = {
  $$type: "ArgWaitMaster";
  sender: Address;
  master: Address;
};

export function storeArgWaitMaster(src: ArgWaitMaster) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2298658685, 32);
    b_0.storeAddress(src.sender);
    b_0.storeAddress(src.master);
  };
}

export function loadArgWaitMaster(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2298658685) {
    throw Error("Invalid prefix");
  }
  let _sender = sc_0.loadAddress();
  let _master = sc_0.loadAddress();
  return { $$type: "ArgWaitMaster" as const, sender: _sender, master: _master };
}

function loadTupleArgWaitMaster(source: TupleReader) {
  let _sender = source.readAddress();
  let _master = source.readAddress();
  return { $$type: "ArgWaitMaster" as const, sender: _sender, master: _master };
}

function storeTupleArgWaitMaster(source: ArgWaitMaster) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.sender);
  builder.writeAddress(source.master);
  return builder.build();
}

function dictValueParserArgWaitMaster(): DictionaryValue<ArgWaitMaster> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgWaitMaster(src)).endCell());
    },
    parse: (src) => {
      return loadArgWaitMaster(src.loadRef().beginParse());
    },
  };
}

export type ArgClearSendBottle = {
  $$type: "ArgClearSendBottle";
  masterAddress: Address;
};

export function storeArgClearSendBottle(src: ArgClearSendBottle) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1064188078, 32);
    b_0.storeAddress(src.masterAddress);
  };
}

export function loadArgClearSendBottle(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1064188078) {
    throw Error("Invalid prefix");
  }
  let _masterAddress = sc_0.loadAddress();
  return {
    $$type: "ArgClearSendBottle" as const,
    masterAddress: _masterAddress,
  };
}

function loadTupleArgClearSendBottle(source: TupleReader) {
  let _masterAddress = source.readAddress();
  return {
    $$type: "ArgClearSendBottle" as const,
    masterAddress: _masterAddress,
  };
}

function storeTupleArgClearSendBottle(source: ArgClearSendBottle) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.masterAddress);
  return builder.build();
}

function dictValueParserArgClearSendBottle(): DictionaryValue<ArgClearSendBottle> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(
        beginCell().store(storeArgClearSendBottle(src)).endCell()
      );
    },
    parse: (src) => {
      return loadArgClearSendBottle(src.loadRef().beginParse());
    },
  };
}

export type ArgAddUserBag = {
  $$type: "ArgAddUserBag";
  address: Address;
  bags: string;
};

export function storeArgAddUserBag(src: ArgAddUserBag) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(891968436, 32);
    b_0.storeAddress(src.address);
    b_0.storeStringRefTail(src.bags);
  };
}

export function loadArgAddUserBag(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 891968436) {
    throw Error("Invalid prefix");
  }
  let _address = sc_0.loadAddress();
  let _bags = sc_0.loadStringRefTail();
  return { $$type: "ArgAddUserBag" as const, address: _address, bags: _bags };
}

function loadTupleArgAddUserBag(source: TupleReader) {
  let _address = source.readAddress();
  let _bags = source.readString();
  return { $$type: "ArgAddUserBag" as const, address: _address, bags: _bags };
}

function storeTupleArgAddUserBag(source: ArgAddUserBag) {
  let builder = new TupleBuilder();
  builder.writeAddress(source.address);
  builder.writeString(source.bags);
  return builder.build();
}

function dictValueParserArgAddUserBag(): DictionaryValue<ArgAddUserBag> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeArgAddUserBag(src)).endCell());
    },
    parse: (src) => {
      return loadArgAddUserBag(src.loadRef().beginParse());
    },
  };
}

type Barter_init_args = {
  $$type: "Barter_init_args";
};

function initBarter_init_args(src: Barter_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function Barter_init() {
  const __code = Cell.fromBase64(
    "te6ccgECMQEACW4AART/APSkE/S88sgLAQIBYgIDAszQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds88uCCyPhDAcx/AcoAVVBQVvQAE/QAAcj0ABL0ABL0AALI9ADJWMzJAczJ7VQtBAIBIBQVBG4BkjB/4HAh10nCH5UwINcLH94gggh3yfe64wIgghDI5jBYuuMCIIIQsLKkxbrjAiCCEF/D24C6BQYHCADiMNMfAYIId8n3uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQAdQB0AHT/9IAVUBsFTACgQELUCNwyFUwyFAEzxbJUATMyFjPFskBzBLL/8oAyRA4EiBulTBZ9FkwlEEz9BPiBX8BsDDTHwGCEMjmMFi68uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0AHTH1UwbBQJAbQw0x8BghCwsqTFuvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXAFUgbBPbPH8KBHKPJTDbPGwWJVUxgQEBBshVUNs8yRA0EiBulTBZ9FowlEEz9BXiAX/gIIIQNSpbtLrjAoIQlGqYtroNDg8QAM6BAQtUREAQI8hVMFBDINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFjPFskBzFgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLH8kQNhIgbpUwWfRZMJRBM/QT4gN/AbRwJoEBCyWDB0Ez9ApvoZQB1wEwkltt4m6zjhwwJYEBCySDB0Ez9ApvoZQB1wEwkltt4iBu8tCA3oEBC1MSoBA4QVCDByFulVtZ9FkwmMgBzwFBM/RB4oEBC20LAfQgbpIwbY5TIG7y0IBvJMhVMFBDINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WyFjPFskBzFgg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbLH8niIxA5ASBulTBZ9FkwlEEz9BPiAoEBCwagEDcQJYEBAQwAKCFulVtZ9FkwmMgBzwBBM/RB4kMUAEzTHwGCEF/D24C68uCB0//T/9QB0AHUAdAB0//UAdDT/zAWFRRDMAA8UFbL/xPL/8hYzxbJAczIWM8WyQHMy/8ByMv/yQHMAKQw0x8BghA1Klu0uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1AHQEmwSgQELAcgByAHPFskBzMkSIG6VMFn0WTCUQTP0E+J/AViOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcBEBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8EgHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgFhcCASAhIgIBIBgZAgEgHB0CEbdf+2ebZ42MMC0aAk20S0Qa6TAgIXdeXBEEGuFhRBAgn/deWhEwYTdeXBEbZ4qgu2eNjDAtGwACIQBsI4EBCyKDB0Ez9ApvoZQB1wEwkltt4m6SMHDggQELJAKDB0Ez9ApvoZQB1wEwkltt4iBu8tCAAom2WwAkGukwICF3XlwRBBrhYUQQIJ/3XloRMGE3XlwRACQa6TAgIXdeXBEEGuFhRBAgn/deWhEwYTdeXBEbZ4qiu2eNjDAtHgJNtRzkGukwICF3XlwRBBrhYUQQIJ/3XloRMGE3XlwRG2eKoLtnjYwwLSAB3O2i7fslgQELI1n0C2+hkjBt3yBukjBtjk3Q+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHUAdAB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAHTH1UwbBRvBOJus5Fb4w1wHwDqgQELVEYTWfQLb6GSMG3fIG6SMG2OTdD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0AH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMfVTBsFG8E4iBu8tCAbyQTXwPHBZN/2zHgAFyBAQsnAln0C2+hkjBt3yBukjBtjhPQ1AHQAdQB0AHT/9IAVTBsFG8E4m6RcOB/AgEgIyQCASAmJwIRtNh7Z5tnjYwwLSUAlbd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4TsunLVmnZbmdB0s2yjN0UkAACIwIBICgpAgFIKisAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtY3NheDVhWGNpYW9IVmlta2dwNEQzcXJldjNKaWhKUVloMnZtbjNHOXFYTVaCACEaxa7Z5tnjYwwC0sAk2sTJBrpMCAhd15cEQQa4WFEECCf915aETBhN15cERtniqC7Z42MMAtLgACJQFo7UTQ1AH4Y9IAAY4Z9AT0BNQB0PQE9AT0BNQw0PQEMBBGEEVsFuAw+CjXCwqDCbry4InbPC8AiiGBAQsiWfQLb6GSMG3fIG6SMG2X0NQB0DFvAeJukzCLCOCBAQsiAln0C2+hkjBt3yBukjBtl9DUAdAxbwHiIG7y0IBvIQHobW1tbW1tgQELjQhgAm4BbUXaH9gHY2NQqH3KMoT96tJkY5rtegzmLA6GIQAMi5U2ViYXN0aWFuiNBVVRElOVVMgS0xPUkEgQkFTRUNBTVCCCIDkpxNhM2HDIVTDIUATPFslQBMzIWM8WyQHMEsv/ygDJEDgwAJwgbpUwWfRZMJRBM/QT4oEBC40IYAJuAW1F2h/YB2NjUKh9yjKE/erSZGOa7XoM5iwOhiEADBAkcIMHIW6VW1n0WTCYyAHPAUEz9EHiQBU="
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initBarter_init_args({ $$type: "Barter_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Barter_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
};

const Barter_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "SetItem",
    header: 153180164,
    fields: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "max",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
      {
        name: "total",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "AddBottle",
    header: 283242353,
    fields: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "amount",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "SendBottle",
    header: null,
    fields: [
      {
        name: "masterAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "senderAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "total",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "ArgSendBottle",
    header: 3370528856,
    fields: [
      {
        name: "masterAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "senderAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "total",
        type: { kind: "simple", type: "uint", optional: false, format: 32 },
      },
    ],
  },
  {
    name: "ArgVerifyBottle",
    header: 2964497605,
    fields: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "masterAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "amount",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
    ],
  },
  {
    name: "BagItem",
    header: null,
    fields: [
      {
        name: "id",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "level",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "image_url",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "max",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "price",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
    ],
  },
  {
    name: "ArgBagItem",
    header: 1606671232,
    fields: [
      {
        name: "id",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "level",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "image_url",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "max",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "price",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
    ],
  },
  {
    name: "Master",
    header: null,
    fields: [
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "camp",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "phone",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "status",
        type: { kind: "simple", type: "bool", optional: false },
      },
    ],
  },
  {
    name: "ArgAddMaster",
    header: 7850487,
    fields: [
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "name",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "camp",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "phone",
        type: { kind: "simple", type: "uint", optional: false, format: 256 },
      },
      {
        name: "status",
        type: { kind: "simple", type: "bool", optional: false },
      },
    ],
  },
  {
    name: "Bags",
    header: null,
    fields: [
      {
        name: "bags",
        type: { kind: "simple", type: "string", optional: false },
      },
    ],
  },
  {
    name: "ArgWaitMaster",
    header: 2298658685,
    fields: [
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ArgClearSendBottle",
    header: 1064188078,
    fields: [
      {
        name: "masterAddress",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "ArgAddUserBag",
    header: 891968436,
    fields: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "bags",
        type: { kind: "simple", type: "string", optional: false },
      },
    ],
  },
];

const Barter_getters: ABIGetter[] = [
  {
    name: "isMaster",
    arguments: [
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "bool", optional: true },
  },
  {
    name: "Master",
    arguments: [],
    returnType: {
      kind: "dict",
      key: "address",
      value: "Master",
      valueFormat: "ref",
    },
  },
  {
    name: "StatusMaster",
    arguments: [
      {
        name: "master",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "bool", optional: false },
  },
  {
    name: "SendBottles",
    arguments: [],
    returnType: {
      kind: "dict",
      key: "address",
      value: "SendBottle",
      valueFormat: "ref",
    },
  },
  {
    name: "TotalBottle",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "BagProducts",
    arguments: [],
    returnType: {
      kind: "dict",
      key: "int",
      value: "BagItem",
      valueFormat: "ref",
    },
  },
  {
    name: "currentBag",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "Bags", optional: false },
  },
];

const Barter_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "ArgAddMaster" } },
  { receiver: "internal", message: { kind: "typed", type: "ArgSendBottle" } },
  { receiver: "internal", message: { kind: "typed", type: "ArgVerifyBottle" } },
  { receiver: "internal", message: { kind: "typed", type: "ArgBagItem" } },
  { receiver: "internal", message: { kind: "typed", type: "ArgAddUserBag" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class Barter implements Contract {
  static async init() {
    return await Barter_init();
  }

  static async fromInit() {
    const init = await Barter_init();
    const address = contractAddress(0, init);
    return new Barter(address, init);
  }

  static fromAddress(address: Address) {
    return new Barter(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: Barter_types,
    getters: Barter_getters,
    receivers: Barter_receivers,
    errors: Barter_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | ArgAddMaster
      | ArgSendBottle
      | ArgVerifyBottle
      | ArgBagItem
      | ArgAddUserBag
      | Deploy
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ArgAddMaster"
    ) {
      body = beginCell().store(storeArgAddMaster(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ArgSendBottle"
    ) {
      body = beginCell().store(storeArgSendBottle(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ArgVerifyBottle"
    ) {
      body = beginCell().store(storeArgVerifyBottle(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ArgBagItem"
    ) {
      body = beginCell().store(storeArgBagItem(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ArgAddUserBag"
    ) {
      body = beginCell().store(storeArgAddUserBag(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getIsMaster(provider: ContractProvider, sender: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(sender);
    let source = (await provider.get("isMaster", builder.build())).stack;
    let result = source.readBooleanOpt();
    return result;
  }

  async getMaster(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("Master", builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      dictValueParserMaster(),
      source.readCellOpt()
    );
    return result;
  }

  async getStatusMaster(
    provider: ContractProvider,
    master: Address,
    sender: Address
  ) {
    let builder = new TupleBuilder();
    builder.writeAddress(master);
    builder.writeAddress(sender);
    let source = (await provider.get("StatusMaster", builder.build())).stack;
    let result = source.readBoolean();
    return result;
  }

  async getSendBottles(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("SendBottles", builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      dictValueParserSendBottle(),
      source.readCellOpt()
    );
    return result;
  }

  async getTotalBottle(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("TotalBottle", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getBagProducts(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("BagProducts", builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.BigInt(257),
      dictValueParserBagItem(),
      source.readCellOpt()
    );
    return result;
  }

  async getCurrentBag(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("currentBag", builder.build())).stack;
    const result = loadTupleBags(source);
    return result;
  }
}
