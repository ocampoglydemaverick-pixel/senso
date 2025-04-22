import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useUserData } from '@/hooks/useUserData';
import ElectricitySection from '@/components/ElectricitySection';
import { Card } from "@/components/ui/card";
import { Home, Droplet, Bolt, Settings } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Electricity = () => {
  const navigate = useNavigate();
  const { firstName, avatarUrl, isLoading } = useUserData();

  const capitalizedFirstName = firstName 
    ? firstName.charAt(0).toUpperCase() + firstName.slice(1) 
    : 'User';

  const handleAddElectricityReading = () => {
    toast({
      title: "Add Electricity Reading",
      description: "Coming soon: take and submit an electric meter photo!",
    });
    navigate('/electricity-monitoring');
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] relative">
      <div className="px-6 pb-32">
        <div className="flex justify-between items-center mb-8 pt-6">
          <div>
            <h1 className="text-2xl font-bold text-[#212529] mb-1">Hi, {capitalizedFirstName} 👋</h1>
            <p className="text-gray-500">Welcome to Senso</p>
          </div>
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatarUrl || ''} alt="Profile" />
            <AvatarFallback>{capitalizedFirstName[0] || '?'}</AvatarFallback>
          </Avatar>
        </div>

        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            <button onClick={() => navigate('/dashboard')} className="px-6 py-3 bg-white text-[#212529] rounded-full whitespace-nowrap">All</button>
            <button onClick={() => navigate('/water')} className="px-6 py-3 bg-white text-[#212529] rounded-full whitespace-nowrap border-2 border-blue-200">Water</button>
            <button className="px-6 py-3 bg-[#212529] text-white rounded-full whitespace-nowrap">Electricity</button>
          </div>
        </div>

        <div className="space-y-4">
          <ElectricitySection 
            variant="electricity" 
            onAddReading={handleAddElectricityReading} 
          />

          <Card className="bg-red-500 p-6 rounded-3xl shadow-sm border border-red-400">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-triangle-exclamation text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">Anomaly Detected</h3>
                <p className="text-sm text-white text-opacity-90">Unusual spike in electricity consumption</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[#212529] mb-1">Current Electricity Rates</h3>
                <p className="text-2xl font-bold text-[#212529]">₱9.50/kWh</p>
                <p className="text-sm text-gray-500">Base rate for residential</p>
              </div>
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-peso-sign text-amber-400" />
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Peak Hours (9AM-9PM)</span>
                <span className="text-sm font-semibold">₱11.50/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Off-Peak Hours</span>
                <span className="text-sm font-semibold">₱8.00/kWh</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6 z-30">
        <div className="bg-[#212529] rounded-full px-8 py-4 shadow-lg">
          <div className="flex justify-between items-center">
            <div 
              className="flex flex-col items-center gap-1 group cursor-default"
              tabIndex={0}
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transition-colors duration-150">
                <Home className="text-white" />
              </div>
              <span className="text-xs font-medium text-white">Home</span>
            </div>
            <button
              onClick={() => navigate('/water-monitoring')}
              className="flex flex-col items-center gap-1 group cursor-pointer transition-all duration-200 active:scale-95"
              type="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 group-hover:bg-blue-50 rounded-full flex items-center justify-center transition-colors duration-150">
                <Droplet className="text-gray-400 group-hover:text-blue-500" />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">Water</span>
            </button>
            <button
              onClick={() => navigate('/electricity-monitoring')}
              className="flex flex-col items-center gap-1 group cursor-pointer transition-all duration-200 active:scale-95"
              type="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 group-hover:bg-amber-50 rounded-full flex items-center justify-center transition-colors duration-150">
                <Bolt className="text-gray-400 group-hover:text-amber-500" />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-amber-500 transition-colors">Electric</span>
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="flex flex-col items-center gap-1 group cursor-pointer transition-all duration-200 active:scale-95"
              type="button"
              tabIndex={0}
            >
              <div className="w-10 h-10 group-hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-150">
                <Settings className="text-gray-400 group-hover:text-gray-600" />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
