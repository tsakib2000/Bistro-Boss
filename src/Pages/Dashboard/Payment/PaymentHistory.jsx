import useAuth from "./../../../Hooks/useAuth";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/payments/${user?.email}`)
        return res.data
    }
  });
  return<>
    <div>
<h1 className="text-2xl font-bold text-center">    Payments:{payments.length}</h1>
    
<div className="overflow-x-auto mt-5 rounded-t-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th> ACTION</th>
              <th> ACTION</th>
              <th> ACTION</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <td className="font-bold">{idx + 1}</td>
                <td>
                <div>
                    <div className="font-bold">{payment.email}</div>
                  </div>
                </td>
                <td className="font-bold">$ {payment.price}</td>
                <td className="font-bold">{payment.transactionId}</td>
                <td>
                  {payment.status}
                </td>
                <td>
                  {payment.date}
                </td>
              </tr>
            ))}
      
          </tbody>
        </table>
      </div>

    </div>
  
  </>
 
};

export default PaymentHistory;
