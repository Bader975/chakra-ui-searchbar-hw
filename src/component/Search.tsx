
import { Stack, Input,Text } from "@chakra-ui/react";
import { SetStateAction, useEffect, useState } from "react";
function Search () {

    interface Itemsprops{
        name?: string,
        image?: string,
        
    
        }
        let items: Itemsprops[ ] = [
            { name:"الزي السعودي", image:"https://images.pexels.com/photos/11309513/pexels-photo-11309513.jpeg?auto=compress&cs=tinysrgb&w=1600", },
            { name: "خريطة المملكة", image:"https://images.pexels.com/photos/4493205/pexels-photo-4493205.jpeg?auto=compress&cs=tinysrgb&w=1600" , },
            { name:"ايام زمان" , image:"https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
            { name: "اشهرالمواشي", image:"https://images.pexels.com/photos/13126897/pexels-photo-13126897.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
            { name: "تراث", image:"https://images.pexels.com/photos/11695881/pexels-photo-11695881.jpeg?auto=compress&cs=tinysrgb&w=1600" ,},
            ]

      const [filteredList, setFilteredList] = useState(items);

      const [title, settitle] = useState("");
     
    
      const filterByBrand = (filteredData: any[]) => {
 
        if (!title) {
          return filteredData;
        }
    
        const filtereddata = filteredData.filter(
          (items: { name: string}) => items.name.split(" ").indexOf(title) !== -1
        );
        return filtereddata;
      };
    
    

      const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        settitle(e.target.value);
      };

     


     
      
    
      useEffect(() => {
        let filteredData = filterByBrand(items);
        setFilteredList(filteredData);
      }, );
    
      return (
        <div className="search">
        
            <Text fontSize='3xl' mr={5}>
          ابحث بالاسم :</Text>
            <Stack spacing={1} w={200} mb={50} mt={5} mr={5}>
  <Input variant='outline' placeholder='Outline'   value={title}
              onChange={handleBrandChange} />
 
</Stack>

            {/* <input
      type="search"
      name="search-form"
      id="search-form"
      className="search-input"
      placeholder="Search for..."
      value={title}
              onChange={handleBrandChange}
  /> */}

              {/* <option value="">All</option>
              <option value="BMW">BMW</option>
              <option value="VW">VW</option>
              <option value="Audi">Audi</option>
            </select> */}
    
   
      
    
          <div id="list">
            {filteredList.map((item, index) => (
              <div className="list-card" key={index}>
                <div className="name">{`${item.name}`}</div>
       
                <img className="list-image " src={item.image} alt="car-img" />
              </div>
            ))}
          </div>
        </div>
      );
    }

export default Search;