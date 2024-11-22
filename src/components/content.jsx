import styled from "styled-components";

export default function ContentFn(prop){
      const handleChange = (e) => {
        const { name, value } = e.target;
        prop.setPersonalData({
          ...prop.personalData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", prop.personalData);
      };
    
      return (
        <Content>
          <h2>Personal Info</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={prop.personalData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={prop.personalData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={prop.personalData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={prop.personalData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="4"
                required
              />
            </div>
            <button type="submit" style={{ padding: "0.5rem 1rem" }}>
              Submit
            </button>
          </form>
        </Content>
      );
}

const Content = styled.div`
    box-sizing: border-box;
    background-color: rebeccapurple;

`