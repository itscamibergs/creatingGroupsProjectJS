import { useState, useEffect } from "react";
import View from "../UI/View.js";
import { CardContainer } from "../UI/Card.js";
import CustomBorderCard from "./ColourIndicator.js";
import Header from "../layout/Header.js";
import Navbar from "../layout/Navbar.js";
import apiURL from "../../api/API_URL.js";

export default function Students(props) {
  const [theStudents, setStudents] = useState(null);
  const url = `${apiURL}/users/groups/1`;

  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {!theStudents ? (
        <p>Loading records ...</p>
      ) : theStudents.length === 200 ? (
        <p>No records found.</p>
      ) : (
        <View>
          <Header />
          <Navbar /> 
          <h1>Favourites students in your course</h1>
          <CardContainer>
            {theStudents.map((student) => {
              return (
                <div class="studentcards">
                  <>
                    <CustomBorderCard
                      affinityID={student.UserLikeAffinityID}
                      key={student.UserID}
                    >
                      <studentCards>
                        <p>{student.UserEmail.substring(0, 8)}</p>
                        <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                        <img
                          class="img"
                          src={student.UserImageURL}
                          alt={student.UserEmail.substring(0, 8)}
                        />
                      </studentCards>
                    </CustomBorderCard>
                  </>
                </div>
              );
            })}
          </CardContainer>
        </View>
      )}
    </>
  );
}
