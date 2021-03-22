import React from "react";
import help from "../assets/images/Help.png";
import calendar from "../assets/images/calendar (1).png";
import more from "../assets/images/Icon - More - Filled.svg";
import cart from "../assets/images/Sales Turnover.svg";
import downArrow from "../assets/images/DownArrow.svg";
import bestSellingProduct from "../assets/images/Product Best.png";
import topCompetitorProduct from "../assets/images/Product  Competitor@2x.png";
import SkuCardItem from "./SkuCardItem";
import BarChart from "./BarChart";
import "daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from "jquery";
import moment from "moment";

function SidenavMain() {
  let price = "3,600,000";
  let percentage = "13.8%";

  $(function () {
    var start = moment().subtract(6, 'days');
    var end = moment();

    function cb(start, end) {
      $('#reportrange span').html(start.format('D MMMM YYYY') + ' - ' + end.format('D MMMM YYYY'));
    }

    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);

    cb(start, end);
  });

  return (
    <>
      <div className="sidenav__main__header">
        <span>Dashboard</span>
        <div className="period">
          <img src={calendar} alt="calendar-logo" />
          <span id="descTitle">Period</span>
          <div id="reportrange">
            <span id="reportRange"></span>  <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="sidenav__main__body">
        {/* Market Insights */}
        <div className="market__insights">
          <div className="title">MARKET INSIGHTS</div>
          <div className="help">
            <img src={help} alt="help-logo" />
            <a href="/">Click Here for Help</a>
            <span>
              <i className="fas fa-chevron-up"></i>
            </span>
          </div>
        </div>
        {/* Sales Turnover */}
        <div className="sales__turnover">
          <div className="sales__turnover__top">
            <span>Sales turnover</span>
            <img src={more} alt="" />
          </div>
          <div className="sales__turnover__bottom">
            <div className="pricing">
              <span>Rp {price}</span>
              <span>
                <img src={downArrow} alt="down-arrow" />
                <span id="percent">{percentage}</span>
                <span id="description">last period in product sold</span>
              </span>
            </div>
            <img src={cart} alt="cart-logo" />
          </div>
        </div>
        <div className="container">
          {/* Average Purchase Value */}
          <div className="average__purchase__value">
            <div className="average__purchase__value__wrapper">
              <div className="average__purchase__value__header">
                <span>average purchase value</span>
                <select name="filter-period" id="filterPeriod">
                  <option>Last 6 Months</option>
                  <option>Last 3 Months</option>
                  <option>Last Month</option>
                </select>
                <img src={more} alt="more-icon" />
              </div>
              <BarChart />
            </div>
          </div>
          {/* Best Selling SKU */}
          <SkuCardItem title="best selling sku" img={bestSellingProduct} />
          {/* Top Competitor SKU */}
          <SkuCardItem title="top competitor sku" img={topCompetitorProduct} />
        </div>
      </div>
    </>
  );
}

export default SidenavMain;
