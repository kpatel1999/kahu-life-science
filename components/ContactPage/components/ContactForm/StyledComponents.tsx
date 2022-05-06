import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 110px 0;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  @media only screen and (max-width: 1200px) {
    max-width: 1230px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1200px) {
    justify-content: space-between !important;
  }
`;
export const ContactTitle = styled.div`
  margin-bottom: 20px;
`;

export const SubTitle = styled.h5`
  font-size: 32px;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Title = styled.h2`
  font-size: 40px;
  letter-spacing: -0.5px;
  margin-bottom: 0;
`;

// export const ContactWrapContent = styled.div``;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px !important;
  letter-spacing: 0.4px;
  color: #676666;
`;

export const ContactWrapContent = styled.div``;

export const Form = styled.form``;

export const FormGrp = styled.div`
  margin-bottom: 25px;
`;

export const Lable = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #0a303a;
  margin-bottom: 10px;
  opacity: 1;
`;

export const Input = styled.input`
  width: 100%;
  background: #f5f2eb;
  border: none;
  font-size: 14px;
  padding: 15px 20px;
  border-radius: 5px;
  display: block;
  font-weight: 400;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: #f5f2eb;
  border: none;
  font-size: 14px;
  padding: 15px 20px;
  border-radius: 5px;
  display: block;
  font-weight: 400;
`;

export const CheckBoxGrp = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 35px;
`;

export const Checkbox = styled.input`
  width: auto;
  margin-top: 3px;
  margin-right: 9px;
`;

export const CheckboxLable = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #676666;
  opacity: 0.8;
  margin-bottom: 0;
  user-select: none;
`;

export const Button = styled.button`
  background: #f04336 none repeat scroll 0 0;
  border: medium none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0;
  padding: 17px 25px;
  transition: all 0.3s ease 0s;
  font-family: "Nunito", sans-serif;
  position: relative;
`;
