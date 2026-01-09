let person = {
    name: "Omar",
    ID: 4,
    employed: true,
    phoneNumber: [
        {
            primary: "010",
            secondary: "011"
        },
        {
            home: "012",
            mobile: "015"
        }
    ]
};

console.log(person.name)
console.log(person.phoneNumber[0]?.primary)
