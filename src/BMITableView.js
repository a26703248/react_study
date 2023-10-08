// BMITableView.js
// 評價 bmi
function bmiEval(bmiValue) {
    if (bmiValue <= 18) return "過輕";
    if (bmiValue > 23) return "過重";
    return "正常";
}

function BMITableView({ records }) {
  const totalHeight = records.reduce((sum, record) => sum + parseFloat(record.height), 0);
  const totalWeight = records.reduce((sum, record) => sum + parseFloat(record.weight), 0);
  const totalBMI = records.reduce((sum, record) => sum + parseFloat(record.bmi), 0);

  const avgHeight = (records.length > 0) ? (totalHeight / records.length).toFixed(2) : 0;
  const avgWeight = (records.length > 0) ? (totalWeight / records.length).toFixed(2) : 0;
  const avgBMI = (records.length > 0) ? (totalBMI / records.length).toFixed(2) : 0;

  return (
    <table border="1" cellSpacing="0" cellPadding="5" className="centered-table">
      <thead>
        <tr>
          <th>序號</th>
          <th>姓名</th>
          <th>身高 (公分)</th>
          <th>體重 (公斤)</th>
          <th>BMI</th>
          <th>評價</th>
          <th>時間</th>
        </tr>
      </thead>
      <tbody>
          {
              records.map((record, index) => (
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{record.name}</td>
                      <td align="right">{record.height}</td>
                      <td align="right">{record.weight}</td>
                      <td align="right">{record.bmi}</td>
                      <td align="center">{bmiEval(parseFloat(record.bmi))}</td>
                      <td align="center">{record.time}</td>
                  </tr>
              ))
          }
      </tbody>
      <tfoot>
          <tr>
            <td colSpan="2" align="center">平均</td>
            <td align="right">{avgHeight}</td>
            <td align="right">{avgWeight}</td>
            <td align="right">{avgBMI}</td>
            <td></td>
            <td></td>
          </tr>
      </tfoot>
    </table>
  );
}

export default BMITableView;
