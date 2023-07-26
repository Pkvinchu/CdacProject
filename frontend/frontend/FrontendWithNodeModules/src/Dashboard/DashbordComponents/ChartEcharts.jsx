import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["In Progress", 11],
  ["Pending", 22],
  ["Completed", 24],
  ["Rejected", 2],
  // ["Sleep", 7] // CSS-style declaration
];

const options = {
  title: "",
  pieHole: 0.4,
  is3D: true
};



export default function ChartEcharts() {


  // const random = () => Math.round(Math.random() * 100)

  let [flag, setFlag] = useState(false);


  let navigate = useNavigate();

  // ------------------------------------------------------------- Session Management
  const logout = () => {

    window.sessionStorage.removeItem('username');
    window.sessionStorage.removeItem('role');
    // window.sessionStorage.clear();
    // window.location.reload(false);
    navigate("/");

  };


  useEffect(() => {

    const sessData = window.sessionStorage.getItem('username');
    const role = window.sessionStorage.getItem('role');
    console.log("Session console - ", sessData);
    console.log("Session Parsed - ", JSON.parse(sessData));

    if (sessData != '' && sessData != 'undefined' && sessData != null && role == 'ADMIN') {
      setFlag(true);





    }
    else {
      navigate('/adminlogin')
    }

  });

  // -------------------------------------------------------------------------

  return (
    <div>
      {flag &&
        <div>

          <main id="main" className="main">
            <div className="pagetitle">
              <h1>Complaint Statistics</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="/admindashboard">Admin Dashboard</a></li>
                  <li className="breadcrumb-item active">ECharts</li>
                </ol>
              </nav>
            </div>{/* End Page Title */}

            <section className="section">
              <div className="row">

                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">

                      {/* Donut Chart */}

                      <div className="App">
                        <Chart
                          chartType="PieChart"
                          width="200%"
                          height="600px"
                          data={data}
                          options={options}
                        />
                      </div>

                      {/* End Donut Chart */}

                    </div>
                  </div>
                </div>

              </div>
            </section>

          </main>{/* End #main */}

          {/* ======= Footer ======= */}
          <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright <strong><span>Admin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
              Designed by <a href="">@2022 C-DAC - IET Group 11</a>
            </div>
          </footer>{/* End Footer */}

        </div>
      }
    </div>
  )
}

