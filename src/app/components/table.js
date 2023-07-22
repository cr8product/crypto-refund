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
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:162.50,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:267,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:480.30,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:4,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:380.10,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:179.50,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:215,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:4105.10,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:4,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:5600.80,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:1,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:70.0,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:2,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:1500.60,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:3,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      amount:1005.08,
      tax:18
    },
    {
      transaction:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
      receiptId:"1234567",
      status:4,
      address:"0x5d3f9f0b64e8b709ec0cf0a92d8eb6c02ca9d1ba5a5850186754f3cb49606fd1",
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
            <td>{d.tax.toFixed(2)}</td>
          </tr>
      ))}
    </tbody>
    <tfoot>
    </tfoot>
  </table>
</div>
    )
}
