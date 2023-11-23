import React from "react";

function Spinner() {
    return (
        <div>
            <div className="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner