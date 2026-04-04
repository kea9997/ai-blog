import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용약관 | AI Optimized Blog',
  description: 'AI Optimized Blog 서비스 이용약관입니다. 본 사이트 이용 전 반드시 확인해 주세요.',
};

export default function Terms() {
  return (
    <div className="policy-container section-padding">
      <h1 className="accent-gradient">이용약관</h1>

      <section className="policy-section">
        <p className="last-updated">최종 수정일: 2026년 4월 4일 | 시행일: 2026년 1월 5일</p>
        <p>
          본 이용약관(이하 &apos;약관&apos;)은 AI Optimized Blog(이하 &apos;본 사이트&apos;)가 제공하는
          모든 콘텐츠 및 서비스 이용에 관한 조건을 규정합니다.
          본 사이트를 이용함으로써 귀하는 본 약관에 동의하는 것으로 간주됩니다.
          동의하지 않는 경우 본 사이트의 이용을 중단해 주시기 바랍니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>1. 서비스 이용</h2>
        <p>본 사이트는 AI 기술, 웹 개발, 검색 최적화 등에 관한 정보를 무료로 제공합니다.</p>
        <ul style={{ lineHeight: '2', marginTop: '0.5rem' }}>
          <li>본 사이트의 콘텐츠는 일반적인 정보 제공 목적으로만 제공됩니다.</li>
          <li>귀하는 합법적인 목적으로만 본 사이트를 이용해야 합니다.</li>
          <li>자동화된 수단(봇 등)을 통한 대량 콘텐츠 수집은 사전 서면 동의가 필요합니다.</li>
          <li>본 사이트의 안정적 운영을 방해하는 행위는 금지됩니다.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>2. 지적재산권</h2>
        <p>
          본 사이트에 게재된 모든 콘텐츠(텍스트, 이미지, 코드, 디자인 등)의 저작권은
          별도의 출처 표기가 없는 한 AI Optimized Blog 운영자에게 귀속됩니다.
        </p>
        <ul style={{ lineHeight: '2', marginTop: '0.5rem' }}>
          <li>개인적·비상업적 목적의 열람 및 인용은 출처 명시 조건으로 허용됩니다.</li>
          <li>상업적 목적의 복제, 배포, 수정은 사전 서면 허가가 필요합니다.</li>
          <li>코드 예시는 별도 라이선스가 명시되지 않은 경우 MIT 라이선스를 따릅니다.</li>
          <li>본 사이트에 인용된 외부 콘텐츠의 저작권은 원저작자에게 있습니다.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>3. 콘텐츠 정확성</h2>
        <p>
          본 사이트는 정확한 정보 제공을 위해 노력하지만, 기술 분야의 빠른 변화로 인해
          일부 정보가 최신 상태가 아닐 수 있습니다.
        </p>
        <ul style={{ lineHeight: '2', marginTop: '0.5rem' }}>
          <li>본 사이트의 정보를 중요한 의사결정에 활용하기 전 반드시 공식 문서를 확인하세요.</li>
          <li>코드 예시는 교육 목적으로 제공되며, 프로덕션 환경에서의 사용 전 검토가 필요합니다.</li>
          <li>오류를 발견하신 경우 <a href="/contact" style={{ color: 'hsl(var(--accent-primary))' }}>Contact</a> 페이지를 통해 알려주시면 신속히 수정합니다.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>4. 광고 및 제휴 콘텐츠</h2>
        <p>
          본 사이트는 Google AdSense를 통한 광고 수익과 제휴 프로그램 수익으로 운영됩니다.
        </p>
        <ul style={{ lineHeight: '2', marginTop: '0.5rem' }}>
          <li>광고 콘텐츠는 편집 콘텐츠와 명확히 구분됩니다.</li>
          <li>제휴 링크가 포함된 경우 해당 사실을 명시합니다.</li>
          <li>광고 및 제휴 관계는 콘텐츠의 편집 독립성에 영향을 미치지 않습니다.</li>
          <li>광고 관련 문의는 <a href="/contact" style={{ color: 'hsl(var(--accent-primary))' }}>Contact</a> 페이지를 이용해 주세요.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>5. AI 활용 고지</h2>
        <p>
          본 사이트는 콘텐츠 작성 보조 목적으로 AI 도구(Claude, ChatGPT 등)를 활용합니다.
          모든 게재 콘텐츠는 운영자의 검수를 거치며, AI 활용 사실을 투명하게 공개합니다.
          AI가 생성한 정보의 정확성에 대한 최종 책임은 운영자에게 있습니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>6. 책임의 제한</h2>
        <p>
          본 사이트는 다음 사항에 대해 법적 책임을 지지 않습니다.
        </p>
        <ul style={{ lineHeight: '2', marginTop: '0.5rem' }}>
          <li>본 사이트 정보를 참고하여 발생한 직·간접적 손해</li>
          <li>외부 링크 사이트의 콘텐츠 또는 개인정보 처리 방식</li>
          <li>불가항력(천재지변, 해킹 등)으로 인한 서비스 중단</li>
          <li>사용자의 귀책 사유로 발생한 손해</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>7. 약관 변경</h2>
        <p>
          본 약관은 필요에 따라 변경될 수 있으며, 변경 시 사이트 내 공지를 통해 안내합니다.
          변경된 약관은 공지 후 7일이 경과하면 효력이 발생합니다.
          변경 후 계속 이용하시는 경우 변경된 약관에 동의한 것으로 간주됩니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>8. 준거법 및 관할</h2>
        <p>
          본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 대한민국 법원을 전속 관할 법원으로 합니다.
        </p>
      </section>

      <section className="policy-section">
        <h2 style={{ color: 'hsl(var(--accent-primary))', margin: '2rem 0 1rem' }}>9. 문의</h2>
        <p>
          약관에 관한 문의사항은{' '}
          <a href="/contact" style={{ color: 'hsl(var(--accent-primary))' }}>Contact</a> 페이지 또는
          이메일(<a href="mailto:kea9997@gmail.com" style={{ color: 'hsl(var(--accent-primary))' }}>kea9997@gmail.com</a>)로 연락해 주세요.
        </p>
      </section>
    </div>
  );
}
