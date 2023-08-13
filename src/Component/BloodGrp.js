import React from 'react';
const BloodGrp = ({ filterBloodGrp ,selectedBloodGroup}) => {
    return (
      <div>
        <div className="form-control bg-transparent w-full max-w-xs">
          <select
            onChange={(e) => filterBloodGrp(e.target.value)}
            
            className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary"
          >
            <option
              value="All"
              className="text-md text-white bg-primary"
              selected
            >
              All Blood Group
            </option>
            <option value="A+" className="text-lg text-white">
              A+
            </option>
            <option value="B+" className="text-lg text-white">
              B+
            </option>
            <option value="Ab+" className="text-lg text-white">
              Ab+
            </option>
            <option value="O+" className="text-lg text-white">
              O+
            </option>
            <option value="O-" className="text-lg text-white">
              O-
            </option>
            <option value="Ab-" className="text-lg text-white">
              Ab-
            </option>
            <option value="B-" className="text-lg text-white">
              B-
            </option>
            <option value="A-" className="text-lg text-white">
              A-
            </option>
          </select>
        </div>
      </div>
    );
};

export default BloodGrp;