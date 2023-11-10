import React from 'react';
import Header from './Header';

function About() {
  return (
    <div style={containerStyle}>
      <h1>About SeedSowMatic</h1>
      <p>
        Welcome to the About Page of SeedSowMatic, our innovative
        semi-autonomous robot designed for planting seeds. Explore the
        capabilities and features of our cutting-edge technology.
      </p>

      <section style={{...featureSectionStyle, padding: '20px'}}>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Autonomous Navigation:</strong> Our robot can navigate across
            dirt terrains with ease, adapting its path based on user input.
          </li>
          <li>
            <strong>Precision Planting:</strong> Equipped with advanced digging
            and planting mechanisms, ensuring accurate and efficient seed
            placement.
          </li>
          <li>
            <strong>Customizable Settings:</strong> Users can control the
            distance between each planted seed, the total travel distance, and
            the number of seeds to be planted via the companion app.
          </li>
        </ul>
      </section>

      <section style={{...imageSectionStyle, padding: '20px'}}>
        <h2>SeedSowMatic Drafts</h2>
        <p>Explore the evolution of our robot through various drafts:</p>
        <div style={imageContainerStyle}>
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492035677225011/SSM_Draft_1.png?ex=6560834d&is=654e0e4d&hm=2aece0e67eb3438dfc14981cbff8899d16265d4eb1cb7f426e7d1d82d38e412d&"
            alt="Draft 1"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492035996012615/SSM_Draft_2.png?ex=6560834d&is=654e0e4d&hm=fcfa982aca6078f7578884c2f8f5ab33360af6cb80307fad82e25f86cedf53b3&g"
            alt="Draft 2"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492036318957638/SSM_Draft_3.png?ex=6560834d&is=654e0e4d&hm=9d7d1b263a3a6fbd0c3983d72b5a1b2cba7a622435dd1781a0a9120c48e63ae7&"
            alt="Draft 3"
            style={imageStyle}
          />
        </div>
      </section>

      <section style={{...imageSectionStyle, padding: '20px'}}>
        <h2>SeedSowMatic Assembly Versions</h2>
        <p>Explore the assembly versions of SeedSowMatic:</p>
        <div style={imageContainerStyle}>
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492038281891860/SSM_Assembly_v1.png?ex=6560834d&is=654e0e4d&hm=c44b8ef614d9a7ba9b7ff0072ef698ec4da9eea94e1921a9feeda64146ac9fce&"
            alt="Assembly v1"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492037937975357/SSM_Assembly_v2.png?ex=6560834d&is=654e0e4d&hm=d1fba1e5ab98bce2dcf5b7d68b7cbd774dc7a09bd9ad44965bb6a6598eef9b50&"
            alt="Assembly v2"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492037573050399/SSM_Assembly_v3.png?ex=6560834d&is=654e0e4d&hm=55bd9a7597a0b4a27ba35ab56c5ba2395fbd3f4c958e6b7839462d05f32a6364&"
            alt="Assembly v3"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492037250093156/SSM_Assembly_v4.png?ex=6560834d&is=654e0e4d&hm=24767ba70fb2f033fd2a269c76e836ed54a5e3fb2518ae4471e00ab99b850bf3&"
            alt="Assembly v4"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172492036881010688/SSM_Assembly_v5.png?ex=6560834d&is=654e0e4d&hm=987b5b7912036af5c4454e2ca9085ca9e5c5a3fc99a77c2f8a97769bf1802d6e&"
            alt="Assembly v5"
            style={imageStyle}
          />
        </div>
    </section>

     <section style={{...imageSectionStyle, padding: '20px'}}>
        <h2>CAD Shovel Model</h2>
        <p>Explore the CAD Shovel Model of SeedSowMatic:</p>
        <div style={imageContainerStyle}>
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172505798564393070/346B8F9F-2A56-40A1-A8D9-924672C79D89.PNG?ex=6560901e&is=654e1b1e&hm=f3f2b15c7a7eae80d9792c8ec8901026194ca9a92ef3f65f4b4a2bd5a2aac22b&"
            alt="CAD Shovel 1"
            style={imageStyle}
          />
          <img
            src="https://cdn.discordapp.com/attachments/898747450943234068/1172505799306780682/D90229D3-40B8-4F24-8F20-8AB32F9A4912.PNG?ex=6560901e&is=654e1b1e&hm=a22d743dbb20452907da9582cc3875a2334a7f6bee8e78f813e69c6e877a157d&"
            alt="CAD Shovel 2"
            style={imageStyle}
          />
        </div>
      </section>

      <section style={{...contactSectionStyle, padding: '20px'}}>
        <h2>Contact Us</h2>
        <p>
          If you have any inquiries or feedback, feel free to reach out to our
          team at <strong>bruinengineers2023@gmail.com</strong>.
        </p>
      </section>
    </div>
  );
}

const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
};
  
const featureSectionStyle = {
};
  
const imageSectionStyle = {
};
  
const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    margin: '20px 0',
};
  
const imageStyle = {
    width: '48%', // Adjust the width as needed with some margin between images
    marginBottom: '10px',
};

const contactSectionStyle = {
    padding: '20px', // Added padding to the contact section
};

export default About;

