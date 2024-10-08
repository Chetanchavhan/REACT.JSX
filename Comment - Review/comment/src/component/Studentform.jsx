import React, { useState } from 'react';


const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        grade: 'A',
        gender: 'Male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Collected Data:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Student Registration</h2>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="grade">Grade:</label>
                <select 
                    id="grade" 
                    name="grade" 
                    value={formData.grade} 
                    onChange={handleChange} 
                    required
                >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>
            </div>
            <div>
                <label>Gender:</label>
                <div>
                    <input 
                        type="radio" 
                        id="male" 
                        name="gender" 
                        value="Male" 
                        checked={formData.gender === 'Male'} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender" 
                        value="Female" 
                        checked={formData.gender === 'Female'} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="other" 
                        name="gender" 
                        value="Other" 
                        checked={formData.gender === 'Other'} 
                        onChange={handleChange} 
                    />
                
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
