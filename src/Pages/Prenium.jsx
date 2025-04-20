// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Prenium = () => {
//   const { MentorId } = useParams(); // Get courceId from URL params
//   const [loading, setloading] = useState(false);

//   console.log(MentorId);
  

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.async = true;
//       script.onload = resolve;
//       document.body.appendChild(script);
//     });
//   };

//   const handlepayment = async () => {
//     setloading(true);
//     try {
//       const token = localStorage.getItem("accessToken")
//       const { data } = await axios.post(
//         `http://localhost:8000/orders/createorder/${MentorId}`,
//         { amount: 1 },
//          {
//           headers: {
//             Authorization: `Bearer ${token}`,
//         },
//          }
//       );

//       if (!data?.data) {
//         alert('No order data received');
//         return;
//       }

//       const { orderId, amount } = data.data;
//       console.log(amount)
//       await loadRazorpayScript();

//       const options = {
//         key:  "rzp_test_RY9m6Nigypx0B2", // Replace with your Razorpay Key ID
//         amount: 100,
//         currency: 'INR',
//         name: 'Acme Corp',
//         description: 'Test Transaction',
//         image: 'https://example.com/your_logo',
//         order_id: orderId,
//         handler: async function (response) {
//           alert('Payment Successful!');
//           alert(`Payment ID: ${response.razorpay_payment_id}`);
//           alert(`Order ID: ${response.razorpay_order_id}`);

//           try {
//             await axios.post(
//               'http://localhost:8000/payment/verify',
//               {
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//                 userId: 'USER_ID', // Replace with actual user ID
//                  MentorId: MentorId, // Replace with actual mentor ID
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//               },
//               }
//             );
//           } catch (error) {
//             console.error('Payment verification failed', error);
//             alert('Payment verification failed');
//           }
//         },
//         prefill: {
//           name: 'Gaurav Kumar',
//           email: 'gaurav.kumar@example.com',
//           contact: '9000090000',
//         },
//         notes: {
//           address: 'Razorpay Corporate Office',
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.on('payment.failed', function (response) {
//         alert('Payment Failed!');
//         alert(response.error.description);
//       });

//       rzp.open();
//     } catch (error) {
//       console.error('Payment failed', error);
//       alert('Payment Failed');
//     } finally {
//       setloading(false);
//     }
//   };

//   useEffect(() => {
//     handlepayment(); // Trigger payment on component mount
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <h1>Processing Payment...</h1>
//       ) : (
//         <h1>Payment Page</h1>
//       )}
//     </div>
//   );
// };

// export default Prenium;




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Premium = () => {
  const { MentorId } = useParams();
  const [loading, setLoading] = useState(false);

  console.log(MentorId);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken")
      const { data } = await axios.post(
        `http://localhost:8000/orders/createorder/${MentorId}`,
        { amount: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!data?.data) {
        alert('No order data received');
        return;
      }

      const { orderId, amount } = data.data;
      console.log(amount)
      await loadRazorpayScript();

      const options = {
        key: "rzp_test_RY9m6Nigypx0B2",
        amount: 100,
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: orderId,
        handler: async function (response) {
          alert('Payment Successful!');
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);

          try {
            await axios.post(
              `${import.meta.env.VITE_API_URL}/payment/verify`,
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userId: 'USER_ID', // Replace with actual user ID
                MentorId: MentorId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
          } catch (error) {
            console.error('Payment verification failed', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9000090000',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        alert('Payment Failed!');
        alert(response.error.description);
      });

      rzp.open();
    } catch (error) {
      console.error('Payment failed', error);
      alert('Payment Failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlePayment();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <div className="bg-blue-900 min-h-screen w-full flex flex-col items-center justify-center p-6 text-white">
          <div className="mb-4">
            <svg className="animate-spin h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-2">Processing Payment</h1>
          <p className="text-blue-200 text-center">Please wait while we connect to Razorpay...</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
          <p>Your payment  is being processed.</p>
        </div>
      )}
    </div>
  );
};

export default Premium;