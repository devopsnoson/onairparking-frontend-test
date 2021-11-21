import { ReactElement } from 'react';

export default function ContentHeader(props): ReactElement {
  return (
    <div className="w-full min-h-32 h-full bg-orange-50">
      <div className="h-full flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl md:text-4xl font-medium">
          {props.btitle}{' '}
          <span style={{ color: '#FA8C16' }}>{props.otitle}</span>
        </h2>
        {props.stitle && (
          <h3 className="text-xl mt-8 max-w-sm text-center">{props.stitle}</h3>
        )}
      </div>
    </div>
  );
}
