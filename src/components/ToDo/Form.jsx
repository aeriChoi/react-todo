import React, { memo, useEffect } from 'react';
import moment from 'moment';
import { Form, Input, Button, DatePicker, Radio } from 'antd';
import {layout, tailLayout, config} from '../../constants';

export const Forms = memo(() => {
  const [form] = Form.useForm();

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  }

  const onFinish = (values) => {
    const { title, description, rank, date } = values;
    const getDate = moment(date).format('YYYY-MM-DD HH:mm');
    const getTime = moment(date).format('HH:mm');
    const getDiffTime = moment(getTime, "HH:mm").fromNow();
    const isBefore = getDiffTime.includes('ago');
    const todoItem = {
      title: title,
      description: description,
      rank: rank,
      date: getDate,
    }

    if (isBefore) {
      alert(`현재 시간보다 이전 시간은 선택할 수 없습니다.\n선택 시간을 다시 확인 해주세요.`);
      return
    } else {
      console.log('등록 가능');
      console.log('onFinish', values);
      console.log('todoItem', todoItem);
    }
  };

  useEffect(() => {
    const testDay = moment("2020-12-14", "YYYY-MM-DD").fromNow();
    const testTime = moment("10:30", "HH:mm").fromNow();
    console.log('testDay', testDay);
    console.log('testTime', testTime);
  });

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
            required: true,
            message: '제목을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder="제목을 입력해주세요." />
      </Form.Item>
      <Form.Item
        label="상세내용"
        name="description"
        rules={[
          {
            required: true,
            message: '내용을 입력해 주세요.',
          },
        ]}
      >
        <Input placeholder="내용을 입력해주세요." />
      </Form.Item>
      <Form.Item
        name="rank"
        label="우선순위"
        rules={[
          {
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
          showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
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
