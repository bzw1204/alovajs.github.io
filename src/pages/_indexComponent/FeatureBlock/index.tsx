import Arrow from '@site/static/img/arrow.svg';
import { ReactNode } from 'react';
import CodeBlock from '../CodeBlock';

export interface FeatureBlockProps {
  type?: string;
  title: string;
  description?: string;
  snippet?: string;
  className?: string;
  children?: ReactNode;
  showLearnMore?: boolean;
}

export default function FeatureBlock(props: FeatureBlockProps) {
  return (
    <div className={`ctw-card flex flex-col rounded-2xl px-8 py-8 ${props.className ?? ''}`}>
      <div className="flex items-center text-sm">
        <span className="px-3 py-1 font-semibold bg-slate-200/10 rounded-full">
          {props.title}
        </span>
        {props.type ? (
          <span className="ml-3 bg-green-700/30 text-green-600 px-3 py-1 rounded-md">
            {props.type}
          </span>
        ) : null}
        {props.showLearnMore ? (
          <div className="flex items-center ml-auto">
            <span>Learn more</span>
            <span className="inline-block ml-2 text-white cursor-pointer w-[16px] h-[16px]">
              <Arrow />
            </span>
          </div>
        ) : null}
      </div>
      {props.description ? <p className="mt-5">{props.description}</p> : null}
      {/* <div>code...</div> */}
      {props.snippet ? (
        <CodeBlock
          fontSize={14}
          code={props.snippet}
          className="mt-8"
        />
      ) : null}
      {props.children}
    </div>
  );
}
