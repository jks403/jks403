- 👋 Hi, I’m @jks403
- 👀 I’m interested in Full stack development from the Entity relationship diagrams to the application layer
- 🌱 I’m currently developing C++, Javascript, SQL, Jquery, Node.Js, Python applications and hosting on my own server @ joshuakane.net
- 💞️ I’m looking to collaborate on applications that optimize orgaization's posture enabling them to prosper and thrive for many years to come
- 📫 How to reach me: jks403@humboldt.edu

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
