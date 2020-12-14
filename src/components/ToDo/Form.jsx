import React, {memo,useState} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/todos/todosSlice';
import moment from 'moment';
import {Form, Input, Button, DatePicker, Radio} from 'antd';
import {getDate, isBefore} from '../../commonness';
import {layout, tailLayout, config} from '../../constants';

const Forms = memo(({toDos, addToDo, onChange}) => {
  const [form] = Form.useForm();
  const [toDoItem, setToDoItem] = useState({
    id: '',
    title: '',
    description: '',
    rank: '',
    date: '',
  });

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const {title, description, rank, date} = values;
    const getDates = getDate(date);
    const isBeforeDay = isBefore('day', date);
    const isBeforeTime = isBefore('time', date);



    const item = {
      id: moment().valueOf(),
      title: title,
      description: description,
      rank: rank,
      date: getDates,
    };

    if ( isBeforeDay && isBeforeTime) {
      alert(`현재 시간보다 이전 시간은 선택할 수 없습니다.\n선택 시간을 다시 확인 해주세요.`);
      onChange(false);
      onReset();
      return
    }
    if ((!isBeforeDay && !isBeforeTime) || (!isBeforeDay && isBeforeTime)) {
      setToDoItem({...item});
      addToDo(item);
      setToDoItem({
        id: '',
        title: '',
        description: '',
        rank: '',
        date: '',
      });
      onChange(true);
      onReset();
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-forms"
      onFinish={onFinish}
    >
      <Form.Item
        label="제목"
        name="title"
        rules={[
          {
            initialValue: toDoItem.title || '',
            required: true,
            message: '제목을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder="제목을 입력해주세요."/>
      </Form.Item>
      <Form.Item
        label="상세내용"
        name="description"
        rules={[
          {
            initialValue: toDoItem.description || '',
            required: true,
            message: '내용을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder="내용을 입력해주세요."/>
      </Form.Item>
      <Form.Item
        name="rank"
        label="우선순위"
        rules={[
          {
            initialValue: toDoItem.rank || '',
            required: true,
            message: '우선순위를 설정해주세요.',
          },
        ]}
      >
        <Radio.Group>
          <Radio value="top">상</Radio>
          <Radio value="middle">중</Radio>
          <Radio value="low">하</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="date" label="마감 기한" {...config}>
        <DatePicker
          format="YYYY-MM-DD HH:mm"
          disabledDate={disabledDate}
          showTime={{defaultValue: moment('00:00', 'HH:mm')}}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          추가하기
        </Button>
      </Form.Item>

    </Form>
  );
});

const mapStateToProps = (state) => {
  return { toDos: state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: item => dispatch(addTodo(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
