import React, { useState } from 'react';
import classes from './styles/subscribe.module.css';
import Modal from './UI/Modal';
import { Colors } from '../constant/styles';
import Image from 'next/image';
import { TextInput, Button } from 'evergreen-ui';

const SubscribeModel = () => {
  const [showSubModel, setShowSubModel] = useState(true);
  if (!showSubModel) {
    return <></>;
  }
  return (
    <Modal onCancel={() => setShowSubModel(false)}>
      <div className={classes['container']}>
        <div className={classes['image']}>
          <Image src={require('../assets/model-1.jpg')} alt="modal" />
        </div>
        <div className={classes['content']}>
          <form>
            <div className={classes['header']}>
              <h3>stay tuned</h3>
              <p>Subscribe to our newsletter to recive updates on new arrivals and discount information</p>
            </div>
            <TextInput
              type="email"
              fontSize={18}
              paddingX={8}
              paddingY={16}
              marginBottom={16}
              marginRight={0}
              width="100%"
              name="email"
              className={classes['email']}
              placeholder="Email"
            />
            <Button
              type="submit"
              backgroundColor={Colors.pink5}
              fontSize={18}
              fontWeight={700}
              border="none"
              color="#fff"
              className={classes.btn}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribeModel;
