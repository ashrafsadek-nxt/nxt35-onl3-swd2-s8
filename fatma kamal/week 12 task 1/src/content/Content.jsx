
import './Content.css'
import m1 from '../assets/images/m1.jpeg'
import m2 from '../assets/images/m2.jpeg'
import m3 from '../assets/images/m3.jpeg'
import m4 from '../assets/images/m4.jpeg'

function Content() {
  return (
    <>

  <div class="card-container">
    <div class="card">
      <img src={m1} alt="product1"/>
      <h3>product1</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, repellendus?</p>
      <button>Buy Now</button>
    </div>

    <div class="card">
      <img src={m2} alt="product2"/>
      <h3>product2</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, repellendus?</p>
      <button>Buy Now</button>
    </div>

    <div class="card">
      <img src={m3} alt="product3"/>
      <h3>product3</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, repellendus?</p>
      <button>Buy Now</button>
    </div>

    <div class="card">
      <img src={m4} alt="product4" />
      <h3>product4</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, repellendus?</p>
      <button>Buy Now</button>
    </div>
  </div>



    </>
  )
}
export default Content
