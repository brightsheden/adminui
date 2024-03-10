
export default function PricingTable() {
    return (
      <div className="w-full overflow-x-auto my-16">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-850">
              <th className="py-3 px-4" />
              <th className="text-center py-3 px-4 font-bold text-3xl">Starter</th>
              <th className="text-center py-3 px-4 font-bold text-3xl">Pro</th>
              <th className="text-center py-3 px-4 font-bold text-3xl">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 text-xl font-bold">Price</td>
              <td className="font-medium text-center py-3 px-4">$9</td>
              <td className="font-medium text-center py-3 px-4">$29</td>
              <td className="font-medium text-center py-3 px-4">$99</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-xl font-bold">Users</td>
              <td className="text-center py-3 px-4">1</td>
              <td className="text-center py-3 px-4">5</td>
              <td className="text-center py-3 px-4">Unlimited</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-xl font-bold">Projects</td>
              <td className="text-center py-3 px-4">5</td>
              <td className="text-center py-3 px-4">Unlimited</td>
              <td className="text-center py-3 px-4">Unlimited</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-xl font-bold">Support</td>
              <td className="text-center py-3 px-4">Community</td>
              <td className="text-center py-3 px-4">Email</td>
              <td className="text-center py-3 px-4">Priority</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  