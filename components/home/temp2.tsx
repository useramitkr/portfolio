import { CalendarDays, MapPin, MoveRight, PhoneCall, Plane, User } from 'lucide-react';
import React, { useState } from 'react';

const FlightSearch = () => {
    const [tripType, setTripType] = useState('One Way');
    const [fareType, setFareType] = useState('Regular');
    const [travelers, setTravelers] = useState(2);

    return (
        <section className='w-full max-w-[1440px] mx-auto'>
            <div className="w-[90%] mx-auto p-4 border-2 border-black rounded-xl bg-white">
                <div className="flex items-center mb-4">
                    <Plane className="w-6 h-6 text-black mr-2" />
                    <h2 className="text-lg font-semibold text-black">Search Flights</h2>
                    <MoveRight className="w-6 h-6 text-black ml-2" />
                </div>
                <div className="flex flex-col md:flex-row items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            checked={tripType === 'One Way'}
                            onChange={() => setTripType('One Way')}
                            className={`mr-1 ${tripType === 'One Way' ? 'text-amber-300' : 'text-black'}`}
                        />
                        <span className="text-black">One Way</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            checked={tripType === 'Round Trip'}
                            onChange={() => setTripType('Round Trip')}
                            className={`mr-1 ${tripType === 'Round Trip' ? 'text-amber-300' : 'text-black'}`}
                        />
                        <span className="text-black">Round Trip</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            checked={tripType === 'Multi City'}
                            onChange={() => setTripType('Multi City')}
                            className={`mr-1 ${tripType === 'Multi City' ? 'text-amber-300' : 'text-black'}`}
                        />
                        <span className="text-black">Multi City</span>
                    </label>
                    <select className="p-2 border border-black rounded text-black">
                        <option>Economy</option>
                        <option>Business</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row items-center mb-4 space-y-2 md:space-y-0 md:space-x-4">
                    <div className="flex items-center border-2 border-black rounded-lg p-2 w-full md:w-auto">
                        <MapPin className="w-10 h-5 text-black mr-2" />
                        <input type="text" placeholder="Leaving from" className="border-none outline-none w-full text-black" />
                        <span className="mx-2 text-black">↔</span>
                        <MapPin className="w-10 h-5 text-black mr-2" />
                        <input type="text" placeholder="Going to" className="border-none outline-none w-full text-black" />
                    </div>
                    <div className="flex items-center border-2 border-black rounded-lg p-2">
                        <CalendarDays className="w-5 h-5 text-black mr-2" />
                        <input type="date" className="border-none outline-none text-black" />
                    </div>
                    <div className="flex items-center border-2 border-black rounded-lg p-2">
                        <User className="w-5 h-5 text-black mr-2" />
                        <select
                            value={travelers}
                            onChange={(e) => setTravelers(parseInt(e.target.value))}
                            className="border-none outline-none text-black"
                        >
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num}>{num} Travelers</option>
                            ))}
                        </select>
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-lg">Search</button>
                </div>
                <div className="mb-4 flex items-center gap-15">
                    <div>
                        <div>
                            <p className="text-black mb-2">Select a special fare</p>
                            <h3 className='text-[#073C5E] font-semibold text-[20px]'>EXTRA SAVINGS</h3>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                            <label className="flex items-center border-2 border-black rounded-lg p-2">
                                <input
                                    type="radio"
                                    checked={fareType === 'Regular'}
                                    onChange={() => setFareType('Regular')}
                                    className={`mr-1 ${fareType === 'Regular' ? 'text-amber-300' : 'text-black'}`}
                                />
                                <span className="text-black"><b>Regular</b><br />Regular fares</span>
                            </label>
                            <label className="flex items-center border-2 border-black rounded-lg p-2">
                                <input
                                    type="radio"
                                    checked={fareType === 'Student'}
                                    onChange={() => setFareType('Student')}
                                    className={`mr-1 ${fareType === 'Student' ? 'text-amber-300' : 'text-black'}`}
                                />
                                <span className="text-black"><b>Student</b><br />Extra discounts/baggage</span>
                            </label>
                            <label className="flex items-center border-2 border-black rounded-lg p-2">
                                <input
                                    type="radio"
                                    checked={fareType === 'Armed Forces'}
                                    onChange={() => setFareType('Armed Forces')}
                                    className={`mr-1 ${fareType === 'Armed Forces' ? 'text-amber-300' : 'text-black'}`}
                                />
                                <span className="text-black"><b>Armed Forces</b><br />Up to ₹600 off</span>
                            </label>
                            <label className="flex items-center border-2 border-black rounded-lg p-2">
                                <input
                                    type="radio"
                                    checked={fareType === 'Doctor and Nurses'}
                                    onChange={() => setFareType('Doctor and Nurses')}
                                    className={`mr-1 ${fareType === 'Doctor and Nurses' ? 'text-amber-300' : 'text-black'}`}
                                />
                                <span className="text-black"><b>Doctor and Nurses</b><br />Up to ₹600 off</span>
                            </label>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FlightSearch;