import React from "react";

function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner-grow text-success me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner