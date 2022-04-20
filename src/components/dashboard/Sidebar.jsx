import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import TimelineIcon from "@material-ui/icons/Timeline";
import BarChartIcon from "@material-ui/icons/BarChart";
import ComputerIcon from "@material-ui/icons/Computer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Graphs from "./Graphs";
import News from "../New/News";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar"></div>
      <div className="sdbar">
        <div className="sidebarmain">
          <div className="title">
            <h3 className="dash">Dashboard</h3>
          </div>
          <div className="startups">
            <HomeIcon /> Home
            <ul className="ulist">
              <li className="ilist" href='./news'>
            <a href="/news "/>
                <LibraryBooksIcon />
                News
              </li>
              <li className="ilist">
                <TimelineIcon /> Statistics
              </li>
              <li className="ilist">
                <BarChartIcon /> Graphs
              </li>
            </ul>
          </div>

          <div className="startups">
            <HomeIcon /> Divisions
            <ul className="ulist">
              <li className="ilist">
                <ComputerIcon /> IT DIV
              </li>
              <li className="ilist">
                <ShoppingCartIcon /> HP DIV
              </li>
              <li className="ilist">
                <BarChartIcon /> Proc DIV
              </li>
              <li className="ilist">
                <LibraryBooksIcon /> Sales DIV
              </li>
              <li className="ilist">
                <TimelineIcon /> HR DIV
              </li>
              <li className="ilist">
                <BarChartIcon /> FNA DIV
              </li>
            </ul>
          </div>

          <div className="startups">
            <HomeIcon /> Home
            <ul className="ulist">
              <li className="ilist">
                <LibraryBooksIcon />
                News
              </li>
              <li className="ilist">
                <TimelineIcon /> Statistics
              </li>
              <li className="ilist">
                <BarChartIcon /> Graphs
              </li>
            </ul>
          </div>

          <div className="startups">
            <HomeIcon /> Home
            <ul className="ulist">
              <li className="ilist">
                <LibraryBooksIcon />
                News
              </li>
              <li className="ilist">
                <TimelineIcon /> Statistics
              </li>
              <li className="ilist">
                <BarChartIcon /> Graphs
              </li>
            </ul>
          </div>
        </div>

        <div className="leftsidebar">
          <div className="leftbox">
            <div className="boxtitle">
              <h1>March 2022</h1>
              <div className="boxsubheading">
                <h5> Total Sale</h5>
                <div className="pluaicons">
                  <ArrowUpwardIcon />
                  +20
                  <h6>
                    Sales Iteincrease
                    <span class="badge bg-secondary">View</span>
                  </h6>
                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                      Lahore Zone
                  </button><ArrowUpwardIcon />


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                      Lahore Zone
                  </button><ArrowUpwardIcon />


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />


                  
                </div>
              </div>
            </div>
          </div>

          <div className="leftbox">
            <div className="boxtitle">
              <h1>February 2022</h1>
              <div className="boxsubheading">
                <h5> Total Sale</h5>
                <div className="pluaicons">
                  <ArrowUpwardIcon /> +90
                  <h6>
                    Sales Item increased{" "}
                    <span class="badge bg-secondary">View</span>
                  </h6>

                

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Rawalpindi Zone
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                   Rawalpindi Zone
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
               Rawalpindi Zone
                  </button><ArrowUpwardIcon />
                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Rawalpindi Zone
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Tooltip on top
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Tooltip on top
                  </button><ArrowUpwardIcon />

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Tooltip on top
                  </button><ArrowUpwardIcon />

                </div>
              </div>
            </div>
          </div>

          <div className="leftbox">
            <div className="boxtitle">
              <h1>January 2022</h1>
              <div className="boxsubheading">
                <h5>Total Sales</h5>
                <div className="pluaicons1">
                  <ArrowDownwardIcon /> -2
                  <h6>
                    Sale decreased
                    <span class="badge bg-secondary">View</span>
                  </h6>
                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon /> 

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon />  

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Multan Zone
                  </button><ArrowDownwardIcon />  

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                   Multan Zone
                  </button><ArrowDownwardIcon /> 

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon />  

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon />  

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                     Lahore Zone
                  </button><ArrowUpwardIcon />

                </div>
              </div>
            </div>
          </div>
          <div className="leftbox">
            <div className="boxtitle">
              <h1>December 2022</h1>
              <div className="boxsubheading">
                <h5> Total Sales</h5>
                <div className="pluaicons">
                  <ArrowUpwardIcon /> +90
                  <h6>
                    Sales Item increased{" "}
                    <span class="badge bg-secondary">View</span>
                  </h6>
                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Abottabad Zone
                  </button><ArrowDownwardIcon />  


                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                   Abottabad Zone
                  </button><ArrowDownwardIcon /> 

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                   Abottabad Zone
                  </button><ArrowDownwardIcon /> 

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon />  

                  <button
                    type="button"
                    class="btn btn-secondary my-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Tooltip on top"
                  >
                    Multan Zone
                  </button><ArrowDownwardIcon />  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
