import React from 'react'
import Crousel from './Crousel'
import Form from './Form'
import {Link} from 'react-router'

export default function 
() {
  return (
    <div>
   <nav className="navebart navbar navbar-expand-lg sticky ">
  <div className="container-fluid">
    <img src="logo.png" width= "75px"/>
    <a className="navbar-brand" href="#">CSD (wd React)</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-rg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rmss.php">RMS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Zones
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Lahore</a></li>
            <li><a className="dropdown-item" href="#">Rawalpindi</a></li>
            <li><a className="dropdown-item" href="#">Peshawar</a></li>
            <li><a className="dropdown-item" href="#">Quetta</a></li>
            <li><a className="dropdown-item" href="#">Karachi</a></li>
            <li><a className="dropdown-item" href="#">Multan Zone</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Other</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">Teams</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">Shops</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">supermarkets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">HP Shops</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">Retail Shops</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Rms">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">HeadOffice Rawalpindi</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Notifications</h4>
  <p>We are informing that the new braches have been opened now 
    You can view it from there easily <a href='https://www.csd.gov.pk/'>View More</a></p>
    <a href= '/dashboard'> Dashboard </a>
    
   
  
<Crousel/>

<div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid ">
    <img src="p2.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          We Delivers the best
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>

        </p>
      </div>
  
</div>
<section class="rw my-5">
  <div class="divisions my-5 text-center">
  <h1>
  DIV's
</h1>
<div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid">
    <img src="it.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          IT DIV
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>

        </p>
      </div>
  </div>
  <div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid">
    <img src="HR.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          HR DIV
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>

        </p>
      </div>
  </div>
  <div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid">
    <img src="12.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          HP DIV
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>

        </p>
      </div>
  </div>
  <div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid">
    <img src="123.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          PCL DIV
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>

        </p>
      </div>
  </div>
  <div class="row my-5">
  <div class= "col-lg-6 col-md-6 col-12 img-fluid">
    <img src="PCL.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class= "col-lg-6 col-md-6 col-12 img-fluid">
        <h2 class="text-center">
          PROC DIV
        </h2>
        <p>
          Quality products are provided on the different supermarkets ,  HP and Retail shops
          All over the Pakistan. The CSD has the different zones throught whoch different sites are managedd 
          from the HeadOffice Rawalpindi.<br class="my-5"></br><br class="my-5"></br><br class="my-5"></br>
          <a type="button" class="btn btn-dark" href='https://www.google.com/maps/place/Canteen+Store+Depatment+Head+Office/@33.5905157,73.0466154,15z/data=!4m2!3m1!1s0x0:0x11a6e6db7d6457ee?sa=X&ved=2ahUKEwiZgrPP_s72AhUDLBoKHVHcAXoQ_BJ6BAgkEAM'>View Location</a>
        </p>
      </div>
  </div>
</div>
</section>

<section>
<h1 class="text-center">
  Our Strategy
</h1>

</section>
<section class="text-center">
<div class="bg-success p-2 text-white">Different supermarkets all around the Pakistan
<a class="text-center"href='https://www.csd.gov.pk/'>View More</a>
</div>
<div class="bg-success p-2 text-white bg-opacity-75">Different HP shops that have been serving all around the Pakistan</div>
<div class="bg-success p-2 text-dark bg-opacity-50">Different Retails shops that have been serving all around the Pakistan</div>
<div class="bg-success p-2 text-dark bg-opacity-25">Different HP shops that have been serving all around the Pakistan</div>

</section>


<section>
<Form/>
  </section>
    </div>
  </div>

  )
}
