'use client';
import React, { useState } from 'react'

const Orders = () => {

  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR PRODUCTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base" />
            <h3>Shop sustainably, live responsibly.  Eco-Friendly choices for a better world.</h3>
          </div>
          <div className="flex flex-wrap -m-4">
            {orders.map(product => (
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={product.image}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-500">
                      {product.brand}
                    </h2>
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {product.title}
                    </h2>

                    <h3 className="text-gray-500 mb-3">₹{product.price}</h3>
                    <p className="mb-4">
                      {product.category}
                    </p>
                    <p className="font-bold text-md mb-4">
                      Ordered On : {new Date(product.orderedOn).toDateString()} {new Date(product.orderedOn).toLocaleTimeString()}
                    </p>


                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  )
}

export default Orders;