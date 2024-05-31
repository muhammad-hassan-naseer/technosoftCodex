import React, { Component } from 'react';


const viewWork = () => {
    return (
      <div>
         <h2 className='text-center'>
            Our clients are doing amazing work with the software we built
          </h2>
          <div id="carouselExample" className="carousel slide height" data-ride="carousel" data-interval="false">
        <ol className="carousel-indicators">
          <li data-target="#carouselExample" data-slide-to={0} className="active" />
          <li data-target="#carouselExample" data-slide-to={1} />
          <li data-target="#carouselExample" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div class="laptop">
      <div class="content">
        <iframe src="https://monstermob-b6c12.web.app/" style={{width:"97%",border:"none",height:"94%"}} />
      </div>
      </div>
      </div>
      <div className="carousel-item">
          <div class="laptop">
      <div class="content">
        <iframe src="https://smartgame-fb46e.web.app/" style={{width:"97%",border:"none",height:"94%"}} />
      </div>
    </div>
          </div>
      <div className="carousel-item">
          <div class="laptop">
      <div class="content">
        <iframe src="https://parlay-18c45.web.app/" style={{width:"97%",border:"none",height:"94%"}} />
      </div>
    </div>
    </div>
      
        
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
     
    </div>
    )
}

export default viewWork
