---
publish: false
tags:
  - Kadam
permalink: 2024.1004.0018.51
---
%% [[Kadam_Concept.drawio]] %%

![[Kadam_Concept.png]]

![[Kadam_Job_activity.png]]

![[Kadam_Class_Diagram.png]]

# 참고
- [Batch vs Stream Processing - What's the Difference?](https://blog.algomaster.io/p/batch-processing-vs-stream-processing?fbclid=IwY2xjawGB5ztleHRuA2FlbQIxMQABHSAUuiCDqlg320oQJ9mntlvcfIrWYvEmW9T1jPdI7Qx8jHVP4pghLKLsrQ_aem_at4h7_7I1Kmunx_TqN4TsA)

```![GPT]
네, AWS에서는 **AWS Management Console**을 통해 AWS Batch Job Definition을 작성할 수 있는 **GUI**를 제공합니다. AWS Management Console은 사용자가 AWS Batch 리소스(예: Job Definition, Job Queue, Compute Environment)를 쉽게 생성, 관리할 수 있도록 돕는 직관적인 웹 기반 인터페이스입니다. 이를 통해 Job Definition을 직접 작성하거나 수정할 수 있습니다.

### AWS Management Console에서 Job Definition 작성 방법

1. **AWS Batch 대시보드로 이동**
   - AWS Management Console에 로그인한 후, 상단 검색창에 **"Batch"**를 입력하고 **AWS Batch** 서비스를 선택합니다.

2. **Job Definitions 메뉴 선택**
   - 왼쪽 탐색 패널에서 **Job Definitions** 메뉴를 선택합니다.

3. **Create Job Definition 버튼 클릭**
   - Job Definition 페이지에서 **"Create"** 버튼을 클릭하여 새 Job Definition을 생성할 수 있습니다.

4. **Job Definition 설정**
   - **Name**: Job Definition의 이름을 입력합니다.
   - **Job Role**: 작업 실행에 필요한 IAM 역할을 선택합니다.
   - **Execution Role**: ECS 작업을 실행할 때 필요한 역할을 선택합니다.
   - **Container Image**: 작업이 실행될 Docker 컨테이너 이미지 이름을 입력합니다.
   - **vCPUs 및 Memory**: 작업이 필요로 하는 CPU와 메모리 양을 지정합니다.
   - **Command**: 컨테이너가 실행될 때 실행할 명령어를 지정합니다.
   - **Environment Variables**: 환경 변수를 추가하여 컨테이너에서 사용될 설정 값을 전달할 수 있습니다.
   - **Volumes 및 Mount Points**: 컨테이너 내에서 사용할 호스트 볼륨을 정의하고, 해당 볼륨을 컨테이너의 어떤 경로에 마운트할지 설정할 수 있습니다.
   - **Log Configuration**: 작업 실행 로그를 Amazon CloudWatch Logs로 보낼 수 있도록 로그 설정을 구성할 수 있습니다.

5. **작업 선행 조건 (Job Dependencies) 설정**
   - 이 단계에서는 GUI에서 직접 선행 작업 조건을 설정할 수는 없지만, Job을 제출할 때 AWS Batch의 **Job Submission** GUI를 통해 **`dependsOn`** 속성을 설정할 수 있습니다. 작업을 제출할 때 **Add dependency** 옵션을 선택하여 선행 작업의 ID를 입력할 수 있습니다.

6. **Submit**
   - 모든 설정이 완료되면, **Create** 버튼을 눌러 Job Definition을 생성합니다.

### AWS Management Console 외 다른 방법

AWS CLI, AWS SDK, 또는 AWS CloudFormation을 사용하여 Job Definition을 정의할 수도 있습니다. 이 방법을 통해 JSON 또는 YAML 형식으로 코드를 작성하고 자동화할 수 있습니다.

### 참고: AWS Batch의 관리 도구

- **AWS Batch 대시보드**: 배치 작업의 전체 워크플로우를 관리하는 GUI.
- **AWS CloudWatch**: 배치 작업 실행 중 생성되는 로그를 모니터링하고 분석.
- **AWS IAM**: Job Definition과 연계된 IAM 역할 관리.

AWS Management Console의 GUI는 처음 AWS Batch를 사용하거나 간단한 설정을 시각적으로 관리하고 싶은 사용자에게 유용하며, 더 복잡한 설정이 필요할 경우 코드 기반의 방법을 병행할 수 있습니다.
```