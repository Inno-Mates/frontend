import { FaChartLine, FaTrophy, FaStar, FaGift, FaCoins, FaShoppingCart } from 'react-icons/fa';

export default function UserDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
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
              <button className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors rounded-lg py-2 px-4 text-sm font-medium mb-2 flex items-center justify-center">
                <FaShoppingCart className="w-4 h-4 mr-2" />
                Browse Store
              </button>
              <button className="w-full bg-blue-500/30 text-white hover:bg-blue-500/40 border border-blue-400/30 rounded-lg py-2 px-4 text-sm font-medium flex items-center justify-center">
                <FaCoins className="w-4 h-4 mr-2" />
                View Rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
