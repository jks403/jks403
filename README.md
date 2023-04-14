- 👋 Hi, I’m Joshua Stewart
- 👀 I’m a computer scientist interested in Full stack development starting with the business rules of the client and designing the entity relationship diagrams all the way to the application layer
- 🌱 I’m currently developing applications using Javascript, SQL, Jquery, Node.Js, git & github for version control, JSON for APIs, CSS, Bootstrap frameworks, building my own servers using NodeMon, Heroku servers, etc among many other languages and technologies. I also have applications and host my own server @ joshuakane.net and https://shielded-bayou-55638.herokuapp.com which is a newsletter sign up I've designed that connects to Mailchimp servers using an API key.
- 💞️ I’m looking to collaborate on applications that optimize orgaization's posture enabling them to prosper and thrive for many years to come
- 📫 How to reach me: jks403@humboldt.edu or joshuaka.joshuakane.net

<!---
jks403/jks403 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

// program reads in the weight of a package of breakfast Cereal in 
ounces and outputs the weight in metric tons as well as the number 
of boxes needed to yield one metric ton of cereal at those ounces given
#include <iostream>
#include <cstdio>
#include <string>

using namespace std;
   int main()
   {
    float metricTon, packages, ounces;
    cout << "Enter in ounces per package\n";
    cin  >> ounces;
    packages = (35273.92 * (1/ounces));
    metricTon = ounces *(1/35273.92);
    cout << "Your boxes needed to yield a metric ton from   " << ounces << " ounce boxes is\n"
    << packages << endl;
    cout << ounces << " ounces outputs to  " << metricTon << " metric tons " << endl;
       
   
   
   return 0; 
   
    
    
    
    
}
