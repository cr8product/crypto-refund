import {string} from "hardhat/internal/core/params/argumentTypes";


export default function Table(){

  const prettyAddress = (text) => {
    return text.substring(0,4) + "..." + text.substring(text.length-5,text.length);
  }

  const currencyFormat = (num) => {
    return '$ '+num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  const showStatus = (statusCode) => {
    switch (statusCode) {
      case 1 :
        return (<div className="badge badge-neutral">In Progress</div>);
        break;
      case 2:
        return (<div className="badge badge-accent">Completed</div>);
        break;
      case 3:
        return (<div className="badge badge-secondary">Rejected</div>);
        break;
      default:
        return (<div className="badge badge-neutral">Unknow</div>);

    }
  }

  const listData = [
    {
      transaction:"0x2d4f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb496023d1",
      receiptId:"DOC1000001",
      status:1,
      address:"0x92etyf0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49786fd1",
      amount:162.50,
      tax:18
    },
    {
      transaction:"0x593f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606dd2",
      receiptId:"DOC1000002",
      status:2,
      address:"0x45ef9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fe1",
      amount:267,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb496062fd1",
      receiptId:"DOC1000003",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:480.30,
      tax:18
    },
    {
      transaction:"0xc73f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49e699k",
      receiptId:"DOC1000004",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb496py651",
      amount:380.10,
      tax:18
    },
    {
      transaction:"0x4m3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb4960t",
      receiptId:"DOC1000005",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606my2",
      amount:179.50,
      tax:18
    },
    {
      transaction:"0x6b3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb496075",
      receiptId:"DOC1000006",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49608y3b",
      amount:215,
      tax:18
    },
    {
      transaction:"0x8n3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb4960n6",
      receiptId:"DOC1000007",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49600p9n",
      amount:4105.10,
      tax:18
    },
    {
      transaction:"0x9d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a585018754f3cb4960m6",
      receiptId:"DOC1000008",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49609n7y",
      amount:5600.80,
      tax:18
    },
    {
      transaction:"0x5e3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49605etr4",
      receiptId:"DOC1000009",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49605f79",
      amount:70.0,
      tax:18
    },
    {
      transaction:"0xb43f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754ef3cb4960p881",
      receiptId:"DOC1000010",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb4960pp88",
      amount:1500.60,
      tax:18
    },
    {
      transaction:"0x8e3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb496pl67n",
      receiptId:"DOC1000011",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:1005.08,
      tax:18
    },
    {
      transaction:"0x233f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49604y6v",
      receiptId:"DOC1000012",
      status:3,
      address:"0x4d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606y5r42",
      amount:300.10,
      tax:18
    }
  ];

    return(

        <div className="overflow-x-auto">
  <table className="table table-zebra table-xs">
    <thead>
      <tr>
        <th></th>
        <th>Transaction Hash</th>
        <th>Receipt Document ID</th>
        <th>Status</th>
        <th>Shop Address</th>
        <th>Value</th>
        <th>Tax</th>
      </tr>
    </thead>
    <tbody>
      {listData.map((d,index) => (
          <tr>
            <td>{index+1}</td>
            <td title={d.transaction}>{prettyAddress(d.transaction)}</td>
            <td>{d.receiptId}</td>
            <td>{showStatus(d.status)}</td>
            <td title={d.address}>{prettyAddress(d.address)}</td>
            <td>{currencyFormat(d.amount)}</td>
            <td>$ {(d.amount*(d.tax/100)).toFixed(2)}</td>
          </tr>
      ))}
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</div>
    )
}
