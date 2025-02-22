import { Result, Steps } from 'antd-mobile';

export default function Demo() {
  return (
    <Steps direction="vertical">
      <Steps.Step
        title="填写机构信息"
        status="finish"
        description="完成时间：2020-12-01 12:30"
      />
      <Steps.Step
        title="签约机构"
        status="finish"
        description="完成时间：2020-12-01 12:30"
      />
      <Steps.Step
        title="关联服务区"
        status="finish"
        description="完成时间：2020-12-01 12:30"
      />
      <Steps.Step title="审批失败" status="error" />
    </Steps>
  );
}
