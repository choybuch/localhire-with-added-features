import { useState } from "react";
import axios from "axios"; // Assuming backend API is handling MongoDB updates
import { toast } from "react-toastify";

const CancelButton = ({ appointmentId }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedReason, setSelectedReason] = useState("");
    const [customReason, setCustomReason] = useState("");
    const [isCancelled, setIsCancelled] = useState(false);

    // Pre-built reasons
    const reasons = [
        "Changed my mind",
        "Found another service provider",
        "Emergency situation",
        "Service no longer needed",
        "Other (Type below)"
    ];

    const handleCancel = async () => {
        let finalReason = selectedReason === "Other (Type below)" ? customReason : selectedReason;

        if (!finalReason) {
            toast.warn("Please select or type a cancellation reason!");
            return;
        }

        try {
            await axios.put(`/api/appointments/${appointmentId}/cancel`, {
                cancelled: true,
                cancellationReason: finalReason,
            });

            setIsCancelled(true);
            setShowModal(false);
            toast.success("Appointment cancelled successfully!");
        } catch (error) {
            console.error("Error cancelling appointment:", error);
            toast.error("Failed to cancel appointment.");
        }
    };

    return (
        <>
            {!isCancelled ? (
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                >
                    Cancel Appointment
                </button>
            ) : (
                <p className="text-red-500 mt-4">Appointment Cancelled</p>
            )}

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-2">Cancel Appointment</h2>
                        
                        <label className="block mb-2">Select a reason:</label>
                        <select
                            className="w-full border rounded p-2 mb-3"
                            value={selectedReason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                        >
                            <option value="">-- Select a Reason --</option>
                            {reasons.map((reason, index) => (
                                <option key={index} value={reason}>
                                    {reason}
                                </option>
                            ))}
                        </select>

                        {selectedReason === "Other (Type below)" && (
                            <input
                                type="text"
                                className="w-full border rounded p-2 mb-3"
                                placeholder="Enter your reason"
                                value={customReason}
                                onChange={(e) => setCustomReason(e.target.value)}
                            />
                        )}

                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="mr-2 px-4 py-2 bg-gray-300 rounded"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 bg-red-500 text-white rounded"
                            >
                                Confirm Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CancelButton;
