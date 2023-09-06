const { db } = require("./server/db");
const Campus = require("./server/db/models/Campus");
const Student = require("./server/db/models/Student");

const seed = async () => {
	try {
		await db.sync({ force: true });

		// Seed campuses
		const campuses = await Campus.bulkCreate([
			{
				name: " University Park",
				imageUrl:
					"https://www.inquirer.com/resizer/VRR-s9z6WC32iQ7wHOky3fwMsb8=/arc-anglerfish-arc2-prod-pmn/public/2DFGN3FJ6VGWBLWKUE7T55STVM.jpg",
				address: "201 Shields Bldg, University Park, PA 16802",
				description: "State College Campus",
			},
			{
				name: " Harrisburg",
				imageUrl:
					"https://www.psu.edu/psu-edu-assets/images/image-gallery/Harrisburg_LP_Olmsted_Building.jpg",
				address: "777 W Harrisburg Pike, Middletown, PA 17057",
				description: "Harrisburg Campus",
			},
		]);

		// Seed students
		const students = await Student.bulkCreate([
      {
        firstName: "Eddie",
        lastName: "Gonsalez",
        email: "eddiegonsalez@example.com",
        imageUrl:
          "https://thumbs.dreamstime.com/b/successful-mexican-male-student-braces-classroom-university-166448604.jpg",
        gpa: 3.2,
        campusId: campuses[0].id, // Associate student with a campus
      },
      {
        firstName: "John",
        lastName: "Sanchez",
        email: "johnsanchez@example.com",
        imageUrl:
          "https://st3.depositphotos.com/29384342/33698/i/450/depositphotos_336982452-stock-photo-student-success-successful-thumbs-up.jpg",
        gpa: 3.9,
        campusId: campuses[1].id, // Associate student with a campus
      },
      {
        firstName: "Alex",
        lastName: "Johnson",
        email: "alexjohnson@example.com",
        imageUrl:
          "https://st2.depositphotos.com/1002314/7824/i/600/depositphotos_78247338-stock-photo-african-student-holds-books-in.jpg",
        gpa: 3.7,
        campusId: campuses[0].id, // Associate student with a campus
      },
      {
        firstName: "Tiffany",
        lastName: "Davis",
        email: "tiffanydavis@example.com",
        imageUrl:
          "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-red-t-shirt-black-jeans-holding-different-copybooks-files-with-bag-white_140725-18644.jpg",
        gpa: 3.8,
        campusId: campuses[1].id, // Associate student with a campus
      },
    ]);

		console.log("Seeding success!");
	} catch (err) {
		console.log("Oh no! Something went wrong while seeding!");
		console.error(err);
	} finally {
		db.close();
	}
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
	try {
		await seed();
		console.log("Seeding success!");
	} catch (err) {
		console.error("Oh noes! Something went wrong!");
		console.error(err);
	} finally {
		db.close();
	}
}

if (require.main === module) {
	runSeed();
}
