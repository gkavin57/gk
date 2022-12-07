import React from 'react'

function Contact() {
  return (
    <>
      <div id="contact">
        <div class="container card bg-transparent mt-1 p-5  " style={{ border: "1px solid #ae493e", boxShadow: "rgb(217, 88, 74) 12px 8px 12px" }}>
          <div class="row mt-4">
            <h1 class="sub-title text-center myname" >Contact Me</h1>
            <hr />

            <div class="col-8  offset-2" id="form">
              <form action='mailto:gayat2000@gmail.com' method='post' encType='text/plain'>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1"
                    placeholder="Enter your name"
                    required />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput2" class="form-label">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput2"
                    placeholder="Enter your email"
                    required />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your messege</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className=' offset-1 text-center'>
                  <button class="btn " type="submit">Submit</button>
                </div>

              </form>



            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Contact