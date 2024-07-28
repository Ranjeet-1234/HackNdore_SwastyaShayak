import "./AreaTable.scss";

const TABLE_HEADS = [
  "Name",
  "Applied Date",
  "OCR Verification",
  "Document Accurecy",
  "Status",
  "Accept / Reject",
  "Forward",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Shravan Jare",
    date: "Jun 24, 2024",
    ocr: "Verified - (85%)",
    docacc: "92%",
    status: "pending",
  },
  {
    id: 101,
    name: "Aarav Patel",
    date: "Jul 12, 2024",
    ocr: "Verified - (78%)",
    docacc: "88%",
    status: "pending",
  },
  {
    id: 102,
    name: "Priya Sharma",
    date: "Aug 3, 2024",
    ocr: "Verified - (90%)",
    docacc: "94%",
    status: "pending",
  },
  {
    id: 103,
    name: "Rajesh Kumar",
    date: "Sep 15, 2024",
    ocr: "Verified - (82%)",
    docacc: "80%",
    status: "pending",
  },
  {
    id: 104,
    name: "Sanya Kapoor",
    date: "Oct 9, 2024",
    ocr: "Verified - (76%)",
    docacc: "85%",
    status: "pending",
  },
  {
    id: 105,
    name: "Ravi Singh",
    date: "Nov 21, 2024",
    ocr: "Verified - (88%)",
    docacc: "91%",
    status: "pending",
  },
];

const DeathTable = () => {
  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Pending Death Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>{dataItem.docacc}</td>
                    <td>
                      <div className="dt-status">
                        <span
                          className={`dt-status-dot dot-${dataItem.status}`}
                        ></span>
                        <span className="dt-status-text">
                          {dataItem.status}
                        </span>
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div>
                        <div>
                          <input type="checkbox" />
                          Accept
                        </div>
                        <div>
                          <input type="checkbox" />
                          Reject
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Accepted Death Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>{dataItem.docacc}</td>
                    <td>
                      <div
                        className="dt-status"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Accepted
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Accepted
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Rejected Death Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>{dataItem.docacc}</td>
                    <td>
                      <div
                        className="dt-status"
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Rejected
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Rejected
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DeathTable;
