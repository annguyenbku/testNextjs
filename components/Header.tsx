import * as React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Props {
}

const Header: React.FunctionComponent<Props> = ({ }: Props) => {
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          <div className="navbar-header logo">
            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="index_light.html"><img className="logo" src="images/logo1.png" alt="" width="119" height="58" /></a>
          </div>
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                  Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="index_light.html">Home 01</a></li>
                  <li><a href="homev2_light.html">Home 02</a></li>
                  <li><a href="homev3_light.html">Home 03</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
                    <ul className="dropdown-menu level2">
                      <li><a href="moviegrid_light.html">Movie grid</a></li>
                      <li><a href="moviegridfw_light.html">movie grid full width</a></li>
                    </ul>
                  </li>
                  <li><a href="movielist_light.html">Movie list</a></li>
                  <li><a href="moviesingle_light.html">Movie single</a></li>
                  <li className="it-last"><a href="seriessingle_light.html">Series single</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="celebritygrid01_light.html">celebrity grid 01</a></li>
                  <li><a href="celebritygrid02_light.html">celebrity grid 02 </a></li>
                  <li><a href="celebritylist_light.html">celebrity list</a></li>
                  <li className="it-last"><a href="celebritysingle_light.html">celebrity single</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  news <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="bloglist_light.html">blog List</a></li>
                  <li><a href="bloggrid_light.html">blog Grid</a></li>
                  <li className="it-last"><a href="blogdetail_light.html">blog Detail</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  community <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="userfavoritegrid_light.html">user favorite grid</a></li>
                  <li><a href="userfavoritelist_light.html">user favorite list</a></li>
                  <li><a href="userprofile_light.html">user profile</a></li>
                  <li className="it-last"><a href="userrate_light.html">user rate</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first">
                <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu level1">
                  <li><a href="landing.html">Landing</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li className="it-last"><a href="comingsoon.html">Coming soon</a></li>
                </ul>
              </li>
              <li><a href="#">Help</a></li>
              <li className="loginLink"><a href="#">LOG In</a></li>
              <li className="btn signupLink"><a href="#">sign up</a></li>
            </ul>
          </div>
        </nav>

        <div className="top-search">
          <select>
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </select>
          <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
        </div>
      </div>
    </header>
  )
}

export default Header
