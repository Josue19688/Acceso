import React from 'react'
import {Task} from '../components/Todo'
export const Dashboard = () => {
  return (
    <>
      <div class="welcome-area">
        <div class="row m-0 align-items-center">
          <div class="col-lg-5 col-md-12 p-0">
            <div class="welcome-content">
              <h1 class="mb-2">Hi, Welcomeback Admin!</h1>
              <p class="mb-0">Just Do Somethings Better</p>
            </div>
          </div>
          <div class="col-lg-7 col-md-12 p-0">
            <div class="welcome-img">
              <img src="assets\img\welcome-img.png" alt="image"/>
            </div>
          </div>
        </div>
      </div>
      <div class="ecommerce-stats-area">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-stats-card-box">
                            <div class="icon">
                                <i class="bx bxs-user-check"></i>
                            </div>
                            <span class="sub-title">Subscribe Gained</span>
                            <h3>23.7k <span class="badge"><i class="bx bx-up-arrow-alt"></i> 26.0%</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-stats-card-box">
                            <div class="icon">
                                <i class="bx bxs-badge-dollar"></i>
                            </div>
                            <span class="sub-title">Revenue Generated</span>
                            <h3>15.1k <span class="badge badge-red"><i class="bx bx-down-arrow-alt"></i> 45.5%</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-stats-card-box">
                            <div class="icon">
                                <i class="bx bx-purchase-tag"></i>
                            </div>
                            <span class="sub-title">Quarterly Sales</span>
                            <h3>30.9k <span class="badge"><i class="bx bx-up-arrow-alt"></i> 32.1%</span></h3>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 col-md-6">
                        <div class="single-stats-card-box">
                            <div class="icon">
                                <i class="bx bx-shopping-bag"></i>
                            </div>
                            <span class="sub-title">Orders Received</span>
                            <h3>10.5k <span class="badge"><i class="bx bx-up-arrow-alt"></i> 56.9%</span></h3>
                        </div>
                    </div>
                </div>
      </div>
      
    </>
  )
}
