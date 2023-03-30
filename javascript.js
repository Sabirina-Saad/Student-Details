function validate(Email, PhoneNo, Name, MatricNo,Address,homeAddress,homeNo) {
    const emailregex = "a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    const PhoneNoRegex = "[0-9]";
    const homeNoRegex = "[0-9]";
    const MatricNoRegex = "[0-9]";
    const NameRegex = "[A-Za-z]+";
    const AddressRegex = "[A-Za-z]+";
    const homeAddressRegex = "[A-Za-z]+";

    const errors = {};
  
    if (!emailRegex.test(Email)) {
      errors.Email = alert('Invalid email address');
    }
  
    if (!PhoneNoRegex.test(PhoneNo)) {
      errors.PhoneNo = alert('Invalid phone number');
    }

    if (!NameRegex.test(Name)) {
        errors.Name = alert('Invalid Name');
      }

      if (!MatricNoRegex.test(MatricNo)) {
        errors.MatricNo = alert('Invalid Matric number');
      }

      if (!homeNoRegex.test(homeNo)) {
        errors.homeNo = alert('Invalid Home number');
      }
      if (!AddressRegex.test(Address)) {
        errors.Name = alert('Invalid Address');
      }

      if (!homeAddressRegex.test(homeAddress)) {
        errors.homeAddress = alert('Invalid Home Address');
      }
      return errors;


 }
  