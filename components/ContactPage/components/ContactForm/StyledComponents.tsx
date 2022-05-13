import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  @media only screen and (max-width: 1200px) {
    max-width: 1230px;
  }

  // @media only screen and (max-width: 1200px) {
  //   max-width: 1230px;
  // }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15rem;
  gap: 3rem;

  @media only screen and (max-width: 1200px) {
    justify-content: space-between !important;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0 1rem;
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

export const ContectInto = styled.div`
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  background: #f5f2eb;
  border-radius: 12px;
  padding: 38px 55px 45px;

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    max-width: 100%;
  }
`;

export const ContactImgContainer = styled.div`
  text-align: center;
  margin-bottom: 55px;
`;

export const ContactImg = styled.img`
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  border-style: none;
`;

export const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  background: #fff;
  flex: 0 0 45px;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  color: #f04336;
  box-shadow: 0px 2px 14.88px 1.12px rgb(97 83 252 / 11%);
`;

export const IconText = styled.div`
  flex-grow: 1;
`;

export const ContactSocial = styled.div`
  margin-top: 40px;
`;

export const SocialUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialLi = styled.li`
  margin-right: 15px;
`;

interface SocialWrapperI {
  color: string;
}

export const SocialWrapper = styled.a<SocialWrapperI>`
  width: 41px;
  height: 41px;
  display: block;
  text-align: center;
  line-height: 41px;
  border-radius: 50%;
  background: ${(props) => props.color};
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
