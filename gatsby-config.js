module.exports = {
  siteMetadata: {
    title: `4252 Concepts`,
    description: `4252 Concepts was founded with the intention to be creative, helpful, and inspiring. ` +
                  `Primarily through community involvement, the company is focused on helping individuals to large ` +
                  `businesses with various services which include technology, photography, graphic arts, video creation, ` +
                  `and, most importantly, achieving their potential. Areas: Microsoft, Azure, Office, Office 365, Outlook, ` +
                  `SharePoint, Teams, Amazon Web Services (AWS), Alexa, Networking, TCP, IP, VPN, DNS, Router, WiFi, ` +
                  `Wireless, Cellular, Installation, Integration, SSL, TLS, Security, Active Directory, RADIUS Authentication, WPA2, WPA ` +
                  `Container, Docker, Kubernetes, React, ReactJS, NodeJS, Development, Visual Studio, Visual Code, Debugging ` +
                  `Wireshark, Backup, Disaster Recovery, Architecture, Information Technology, IT, Support, Desktop, ` +
                  `Windows, Windows 10, Linux, Ubuntu, Lambda, Azure Functions, Virtual Private Networking, Domain Name Server, ` +
                  `Ubiquiti, Unifi, Video Surveillance, Photography, Washington, WA, Bellevue, Redmond, Kirkland, Cle Elum, ` +
                  `Issaquah, Kent, Renton, Seattle, Global, National, International, Consulting, Management, Services, Solutions ` +
                  `Small Business, SMB`,
    twitterDescription: `4252 Concepts was founded with the intention to be creative, helpful, and inspiring. \
                  Primarily through community involvement, the company is focused on helping individuals to large \
                  businesses with various services which include technology, photography, graphic arts, video creation, \
                  and, most importantly, achieving their potential.`,
    author: `@brian4252`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `4252 Concepts | Website`,
        short_name: `4252`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_64px.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-7725473-8",
        head: false
      },
    },
  ],
}
