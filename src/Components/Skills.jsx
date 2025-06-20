import { Progress } from 'antd';

function Skills() {
  return (
    <section id="skills" style={{ padding: '50px' }}>
      <h2>Ko‘nikmalarim</h2>
      <p>HTML</p>
      <Progress percent={90} />
      <p>CSS</p>
      <Progress percent={85} />
      <p>React</p>
      <Progress percent={80} />
    </section>
  );
}

export default Skills;
