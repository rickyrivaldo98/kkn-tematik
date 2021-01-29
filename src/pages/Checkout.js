import React from "react";

const Checkout = () => {
  // function incrementValue(e) {
  //   e.preventDefault();
  //   var fieldName = $(e.target).data('field');
  //   var parent = $(e.target).closest('div');
  //   var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  //   if (!isNaN(currentVal)) {
  //     parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  //   } else {
  //     parent.find('input[name=' + fieldName + ']').val(0);
  //   }
  // }

  // function decrementValue(e) {
  //   e.preventDefault();
  //   var fieldName = $(e.target).data('field');
  //   var parent = $(e.target).closest('div');
  //   var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  //   if (!isNaN(currentVal) && currentVal > 0) {
  //     parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  //   } else {
  //     parent.find('input[name=' + fieldName + ']').val(0);
  //   }
  // }
  return (
    <>
      <section
        className="bgpemesanan"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="headerpemesanan container">
          <div>
            <h1>
              <b>Checkout Pesanan</b>
            </h1>
          </div>
          <div className="cardcheckout card-body">
            <div className="row mt-5">
              <div className="col-12 ">
                <h2>
                  <b>PAKET BAGUS</b> <br /> <b>Rp. 120.000</b>
                </h2>
                <h2>
                  <b>Penjelasan</b>
                </h2>
                <p>
                  LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                  lalalalalala LoremIpsum lalalalalala LoremIpsum lalalalalala
                  LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                  lalalalalala LoremIpsum lalalalalala LoremIpsum lalalalalala
                  LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                  lalalalalala LoremIpsum lalalalalala LoremIpsum lalalalalala
                  LoremIpsum lalalalalala LoremIpsum lalalalalala
                </p>
                <h2>
                  <b>Benefit</b>
                </h2>
                <ul>
                  <li>Makan 3 kali sehari</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
                <h2>
                  <hr />
                </h2>
              </div>

              <div className="col-12">
                <form className="countertotal">
                  <div className="form-group row">
                    <h2>Jumlah:</h2>
                    <div>
                      <div className="input-group">
                        <input
                          type="button"
                          value="-"
                          className="button-minus"
                          data-field="quantity"
                        />
                        <input
                          type="number"
                          step="1"
                          max=""
                          value="1"
                          name="quantity"
                          className="quantity-field"
                        />
                        <input
                          type="button"
                          value="+"
                          className="button-plus"
                          data-field="quantity"
                        />
                      </div>
                    </div>
                    <h2>Orang</h2>
                  </div>
                  <div>
                    <h2 className="form-group row">Total:</h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="cardcheckout card-body">
            <h1>Data Diri</h1>
            <div className="container">
              <div className="row">
                <div className="booking-form">
                  <form>
                    <div className="form-group">
                      <h2 style={{ color: "white" }}>Traveller Details</h2>
                      <div className="form-checkbox">
                        <label for="mr">
                          <input type="radio" id="mr" name="flight-type" />
                          <span></span>Mr
                        </label>
                        <label for="mrs">
                          <input type="radio" id="mrs" name="flight-type" />
                          <span></span>Mrs
                        </label>
                        <label for="ms">
                          <input type="radio" id="ms" name="flight-type" />
                          <span></span>Ms
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Full name</span>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Identity Number</span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="KTP/SIM/Student Card"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <span className="form-label">Phone Number</span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="+62"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <span className="form-label">Email</span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <span className="form-label">Choose a date</span>
                          <input
                            className="form-control"
                            type="date"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-btn">
                        <button className="submit-btn" name="booking">
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Checkout;
