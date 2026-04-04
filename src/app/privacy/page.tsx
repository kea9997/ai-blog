export default function PrivacyPolicy() {
  return (
    <div className="policy-container section-padding">
      <h1 className="accent-gradient">개인정보처리방침</h1>

      <section className="policy-section">
        <p className="last-updated">최종 수정일: 2026년 4월 4일</p>
        <p>
          AI Optimized Blog(이하 &apos;본 사이트&apos;, 운영자: kea9997@gmail.com)는 귀하의 개인정보를 소중히 여기며,
          대한민국 개인정보보호법 및 글로벌 표준(GDPR, CCPA)을 준수합니다.
          본 방침은 본 사이트가 수집하는 개인정보의 종류, 이용 목적, 보관 기간, 그리고 귀하의 권리를 설명합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>1. 수집하는 개인정보 항목 및 목적</h2>
        <p>본 사이트는 다음과 같은 최소한의 정보를 수집합니다.</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid hsla(var(--accent-primary), 0.3)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem', opacity: 0.8 }}>수집 항목</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', opacity: 0.8 }}>수집 목적</th>
              <th style={{ textAlign: 'left', padding: '0.5rem', opacity: 0.8 }}>보존 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid hsla(var(--text-muted), 0.2)' }}>
              <td style={{ padding: '0.5rem' }}>이메일 주소</td>
              <td style={{ padding: '0.5rem' }}>문의 응대</td>
              <td style={{ padding: '0.5rem' }}>처리 완료 후 1년</td>
            </tr>
            <tr style={{ borderBottom: '1px solid hsla(var(--text-muted), 0.2)' }}>
              <td style={{ padding: '0.5rem' }}>IP 주소 (익명화)</td>
              <td style={{ padding: '0.5rem' }}>보안, 트래픽 분석</td>
              <td style={{ padding: '0.5rem' }}>90일</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5rem' }}>방문 페이지, 체류 시간</td>
              <td style={{ padding: '0.5rem' }}>콘텐츠 개선</td>
              <td style={{ padding: '0.5rem' }}>26개월 (Google Analytics 기준)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>2. 쿠키(Cookie) 및 유사 기술</h2>
        <p>
          본 사이트는 서비스 제공과 사용자 경험 개선을 위해 쿠키를 사용합니다.
          브라우저 설정에서 쿠키를 거부할 수 있으나, 일부 기능이 제한될 수 있습니다.
        </p>
        <ul style={{ lineHeight: '1.9', marginTop: '0.5rem' }}>
          <li><strong>필수 쿠키</strong>: 사이트의 기본 기능 동작에 필요하며, 동의 없이도 사용됩니다.</li>
          <li><strong>분석 쿠키</strong>: 방문 통계 수집을 위해 사용되며, 동의 후 활성화됩니다. (Google Analytics)</li>
          <li><strong>광고 쿠키</strong>: 맞춤형 광고 제공을 위해 사용되며, 동의 후 활성화됩니다. (Google AdSense)</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          쿠키 동의는 사이트 하단의 쿠키 배너를 통해 언제든지 변경하거나 철회할 수 있습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>3. Google AdSense 및 제3자 광고</h2>
        <p>
          본 사이트는 Google AdSense를 통해 광고를 게재합니다. 이에 따라 다음 사항을 고지합니다.
        </p>
        <ul style={{ lineHeight: '1.9', marginTop: '0.5rem' }}>
          <li>Google을 포함한 제3자 제공업체는 사용자의 이전 방문 정보를 바탕으로 맞춤형 광고를 게재하기 위해 쿠키를 사용합니다.</li>
          <li>Google의 <strong>DART 쿠키</strong>를 통해 본 사이트 및 인터넷상의 다른 사이트 방문 정보를 기반으로 광고가 제공될 수 있습니다.</li>
          <li>사용자는 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="accent-link">Google 광고 설정</a>에서 맞춤 광고를 중단할 수 있습니다.</li>
          <li><a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="accent-link">www.aboutads.info</a>에서 제3자 광고 쿠키 사용을 관리할 수 있습니다.</li>
          <li>광고 수익은 콘텐츠의 편집 방향이나 독립성에 영향을 미치지 않습니다.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>4. AI 콘텐츠 생성 도구 활용 고지</h2>
        <p>
          본 사이트의 콘텐츠 일부는 Claude, ChatGPT 등의 AI 도구를 활용하여 초안이 작성됩니다.
          모든 최종 게재 콘텐츠는 운영자가 직접 사실 확인 및 검수를 거칩니다.
          AI 활용 사실을 투명하게 공개하는 것은 본 사이트의 편집 원칙입니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>5. 제3자 공유</h2>
        <p>
          본 사이트는 다음의 경우를 제외하고 귀하의 개인정보를 제3자에게 판매하거나 임대하지 않습니다.
        </p>
        <ul style={{ lineHeight: '1.9', marginTop: '0.5rem' }}>
          <li>법령에 따른 수사기관의 적법한 요청이 있는 경우</li>
          <li>서비스 제공에 필요한 범위 내에서 처리 위탁 업체(Google Analytics, Google AdSense)와 공유하는 경우</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>6. 귀하의 권리</h2>
        <p>귀하는 다음의 권리를 보유합니다. 행사를 원하시는 경우 아래 문의처로 연락해 주세요.</p>
        <ul style={{ lineHeight: '1.9', marginTop: '0.5rem' }}>
          <li><strong>열람권</strong>: 본인에 관한 개인정보를 열람할 권리</li>
          <li><strong>정정권</strong>: 부정확한 개인정보를 수정할 권리</li>
          <li><strong>삭제권</strong>: 개인정보의 삭제를 요청할 권리 (잊힐 권리)</li>
          <li><strong>처리 제한권</strong>: 특정 상황에서 개인정보 처리를 제한할 권리</li>
          <li><strong>이동권</strong>: 개인정보를 기계 판독 가능한 형식으로 제공받을 권리</li>
          <li><strong>동의 철회권</strong>: 동의에 기반한 처리에 대해 언제든지 동의를 철회할 권리</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>요청 접수 후 법정 기한(30일) 이내에 처리해 드립니다.</p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>7. 개인정보의 보유 및 파기</h2>
        <p>
          수집 목적이 달성되거나 법령상 보존 기간이 만료된 경우, 해당 정보를 지체 없이 파기합니다.
          전자적 파일 형태의 정보는 복구 불가능한 방식으로 영구 삭제하며,
          출력물은 분쇄 또는 소각합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>8. 아동의 개인정보</h2>
        <p>
          본 사이트는 만 14세 미만 아동을 대상으로 하지 않으며, 의도적으로 아동의 개인정보를 수집하지 않습니다.
          만 14세 미만 아동의 정보가 수집된 것을 인지하는 경우, 즉시 삭제 조치합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>9. 개인정보처리방침 변경</h2>
        <p>
          본 방침은 법령 변화나 서비스 변경에 따라 업데이트될 수 있습니다.
          중요한 변경 사항이 있는 경우 사이트 내 공지를 통해 안내합니다.
          변경된 방침은 게재 즉시 효력이 발생합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>10. 문의처</h2>
        <p>
          개인정보와 관련된 모든 문의, 열람·수정·삭제 요청은 아래로 연락해 주세요.
        </p>
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'hsla(var(--accent-primary), 0.08)',
          borderRadius: '12px',
          border: '1px solid hsla(var(--accent-primary), 0.2)'
        }}>
          <p style={{ margin: 0, lineHeight: '1.9' }}>
            <strong>운영자</strong>: AI Optimized Blog<br />
            <strong>이메일</strong>: <a href="mailto:kea9997@gmail.com" className="accent-link">kea9997@gmail.com</a><br />
            <strong>처리 기한</strong>: 접수 후 30일 이내
          </p>
        </div>
      </section>
    </div>
  );
}
