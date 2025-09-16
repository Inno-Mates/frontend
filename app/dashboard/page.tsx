import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { FaCoins, FaShoppingCart, FaChartLine, FaGift, FaStar, FaTrophy } from 'react-icons/fa';

export default function DashboardPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">My Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Track your community reports, earn tokens for your contributions, and redeem rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
                    <FaChartLine className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">My Reports</p>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">12</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
                  <span className="font-medium">+3</span>
                  <span>this month</span>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                    <FaTrophy className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Resolved Reports</p>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">8</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-green-100 text-green-700">
                  <span className="font-medium">75%</span>
                  <span>success rate</span>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600">
                    <FaStar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Pending Reports</p>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">4</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                  <span className="font-medium">2</span>
                  <span>being reviewed</span>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                    <FaGift className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Tokens Earned</p>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">1,250</h3>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  <span className="font-medium">+150</span>
                  <span>this week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Token Section */}
          <div className="mt-8 mb-8">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Civic Tokens</h2>
                  <p className="text-blue-100">Earn and spend tokens for community engagement</p>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/20 rounded-lg px-4 py-2">
                  <FaCoins className="w-6 h-6 text-yellow-300" />
                  <span className="text-2xl font-bold">1,250</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">How to Earn</h3>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• Submit a report: +10 tokens</li>
                    <li>• Report gets resolved: +25 tokens</li>
                    <li>• Join community events: +15 tokens</li>
                    <li>• Complete feedback surveys: +5 tokens</li>
                  </ul>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Redeem Rewards</h3>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>• Coffee vouchers: 50 tokens</li>
                    <li>• Local restaurant coupons: 100 tokens</li>
                    <li>• Community merchandise: 200 tokens</li>
                    <li>• Event tickets: 150 tokens</li>
                  </ul>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Token Store</h3>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 mt-2 mb-2">
                    <FaShoppingCart className="w-4 h-4 mr-2" />
                    Browse Store
                  </Button>
                  <Button className="w-full bg-blue-500/30 text-white hover:bg-blue-500/40 border border-blue-400/30">
                    <FaCoins className="w-4 h-4 mr-2" />
                    View Rewards
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* My Activity Graph */}
          <div className="mt-8 mb-8">
            <div
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  My Activity This Month
                </h3>
              </div>
              
              <div className="h-[300px] flex items-end justify-between gap-4 px-4">
                {[
                  { week: 'Week 1', reports: 3, resolved: 2, color: 'bg-blue-500' },
                  { week: 'Week 2', reports: 4, resolved: 3, color: 'bg-green-500' },
                  { week: 'Week 3', reports: 2, resolved: 2, color: 'bg-purple-500' },
                  { week: 'Week 4', reports: 3, resolved: 1, color: 'bg-orange-500' }
                ].map((item, index) => {
                  const totalHeight = Math.max((item.reports / 5) * 80, 15);
                  const resolvedHeight = Math.max((item.resolved / item.reports) * 100, 10);
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center max-w-[100px]">
                      <div className="relative w-full h-full flex flex-col justify-end">
                        <div 
                          className="bg-gray-200 rounded-t-lg w-full relative overflow-hidden mb-2"
                          style={{ minHeight: '30px', height: `${totalHeight}%` }}
                        >
                          <div 
                            className={`rounded-t-lg w-full absolute bottom-0 hover:brightness-110 transition-all duration-200 ${item.color}`}
                            style={{ minHeight: '15px', height: `${resolvedHeight}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-3 text-center w-full">
                        <p className="text-xs font-medium text-gray-600">{item.week}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.resolved}/{item.reports} resolved</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">Total Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-600">Resolved Reports</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    My Recent Reports
                  </h3>
                </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Report ID</th>
                          <th scope="col" className="px-6 py-3">Issue</th>
                          <th scope="col" className="px-6 py-3">Location</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Tokens</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1234</td>
                          <td className="px-6 py-4">Pothole</td>
                          <td className="px-6 py-4">Main St & 5th Ave</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Resolved</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-green-600 font-medium">+35 tokens</span>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1235</td>
                          <td className="px-6 py-4">Broken Streetlight</td>
                          <td className="px-6 py-4">Park Ave & 10th St</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">In Progress</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-blue-600 font-medium">+10 tokens</span>
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1236</td>
                          <td className="px-6 py-4">Graffiti</td>
                          <td className="px-6 py-4">Community Center</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">Pending</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-blue-600 font-medium">+10 tokens</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Reports</Button>
                  </div>
              </div>
            </div>

            <div>
              <div
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Available Rewards
                  </h3>
                </div>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Coffee Voucher</h4>
                          <p className="text-sm text-gray-500 mt-1">Local Coffee Shop</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-600">50</p>
                          <p className="text-xs text-gray-500">tokens</p>
                        </div>
                      </div>
                      <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-sm">
                        Redeem Now
                      </Button>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Restaurant Coupon</h4>
                          <p className="text-sm text-gray-500 mt-1">20% off at Local Bistro</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-600">100</p>
                          <p className="text-xs text-gray-500">tokens</p>
                        </div>
                      </div>
                      <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-sm">
                        Redeem Now
                      </Button>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Community Merchandise</h4>
                          <p className="text-sm text-gray-500 mt-1">Civic Connect T-Shirt</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-600">200</p>
                          <p className="text-xs text-gray-500">tokens</p>
                        </div>
                      </div>
                      <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-sm">
                        Redeem Now
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">View All Rewards</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}