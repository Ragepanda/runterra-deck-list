import React from "react";

import { Helmet } from "react-helmet";
class Terms extends React.Component {



  componentDidMount() {

  }


  createHelmet() {

    let metatitle = "Runeterra Nexus Terms of Service | Best Legends of Runeterra Decks on Runeterra Nexus"; //will need to add a property for which set it is
    let descrip = "This is Runeterra Nexus' terms of service. We are committed to bringing you the best legends of runeterra decks"; //will need to add a property for which set it is
    let metacontent = "cards,card library,lor,legend, nexus, legends,runeterra,deck,decklist,decklists,decks,set,sets,expansion,expansions, best, terms"; //will need to add in property for which set it is

    let helmet = <Helmet>
      <title>{metatitle}</title>
      <meta name="description" content={descrip} />
      <meta name="keywords" content={metacontent} />
      <meta name="author" content="runeterranexus.com" />
      <meta http-equiv="Content-Language" content="en-US" />
      <meta name="rating" content="kids" />
      <meta http-equiv="content-type" content="text/html" charSet="utf-8" />
    </Helmet>;

    return helmet;
  }

  render() {
    return(
    <div className="regBody container">
        <h1>Website Terms and Conditions of Use</h1>
    
        <h2>1. Terms</h2>
    
        <p>By accessing this Website, accessible from http://runeterranexus.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms of Service Generator</a> and the <a href="https://www.termsconditionsexample.com">Terms & Conditions Example</a>.</p>
    
        <h2>2. Use License</h2>
    
        <p>Permission is granted to temporarily download one copy of the materials on runeterranexus.com's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
    
        <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on runeterranexus.com's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
    
        <p>This will let runeterranexus.com to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.</p>
    
        <h2>3. Disclaimer</h2>
    
        <p>All the materials on runeterranexus.com’s Website are provided "as is". runeterranexus.com makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, runeterranexus.com does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
    
        <h2>4. Limitations</h2>
    
        <p>runeterranexus.com or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on runeterranexus.com’s Website, even if runeterranexus.com or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
    
        <h2>5. Revisions and Errata</h2>
    
        <p>The materials appearing on runeterranexus.com’s Website may include technical, typographical, or photographic errors. runeterranexus.com will not promise that any of the materials in this Website are accurate, complete, or current. runeterranexus.com may change the materials contained on its Website at any time without notice. runeterranexus.com does not make any commitment to update the materials.</p>
    
        <h2>6. Links</h2>
    
        <p>runeterranexus.com has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by runeterranexus.com of the site. The use of any linked website is at the user’s own risk.</p>
    
        <h2>7. Site Terms of Use Modifications</h2>
    
        <p>runeterranexus.com may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
    
        <h2>8. Your Privacy</h2>
    
        <p>Please read <a href="https://www.privacypolicygenerator.info/">our Privacy Policy</a>.</p>
    
        <h2>9. Governing Law</h2>
    
        <p>Any claim related to runeterranexus.com's Website shall be governed by the laws of us without regards to its conflict of law provisions.</p>
    </div>
    );
  }  
};

export default Terms;